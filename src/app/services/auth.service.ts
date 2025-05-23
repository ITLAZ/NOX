import { Injectable, Injector, runInInjectionContext } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { DatabaseService } from './database.service';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  profile: any;

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    public toastCtrl: ToastController,
    public db: DatabaseService,
    public router: Router,
    private injector: Injector
  ) {
    const user = localStorage.getItem('profile');
    if (user) {
      this.profile = JSON.parse(user);
      this.getProfile(this.profile.id);
    }
  }

  registerUser(email: string, password: string, extraData: any) {
    return runInInjectionContext(this.injector, () => {
      return this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          const uid = userCredential.user?.uid;
          if (uid) {
            return runInInjectionContext(this.injector, () => {

            return this.firestore.collection('usersPrueba').doc(uid).set(extraData)
              .then(async () => {
                console.log('Usuario creado en Firestore', extraData);
                const toast = await this.toastCtrl.create({
                  message: 'Usuario creado exitosamente.',
                  duration: 2000,
                  color: 'success'
                });
                await toast.present();
                this.router.navigate(['/login']);
                setTimeout(() => {
                  location.reload();
                }, 200);
              })
              .catch(async error => {
                console.error('Error al guardar datos en Firestore:', error);
                const toast = await this.toastCtrl.create({
                  message: 'Error al guardar datos en Firestore.',
                  duration: 2000,
                  color: 'danger'
                });
                await toast.present();
                throw error;
              });
            });
          }
          throw new Error('Usuario no creado');
        })
        .catch(async error => {
          console.error('Error al registrar usuario:', error);
          const toast = await this.toastCtrl.create({
            message: error?.message || 'Error al registrar usuario.',
            duration: 2000,
            color: 'danger'
          });
          await toast.present();
          throw error;
        });
    });
  }

  getProfile(uid: any) {
    return runInInjectionContext(this.injector, () => {
      this.db.getDocumentById('usersPrueba', uid).subscribe(
        (res: any) => {
          console.log('Perfil desde Firestore:', res);
          localStorage.setItem('profile', JSON.stringify(res));
          this.profile = res;
        },
        (error: any) => {
          console.error('Error al obtener perfil:', error);
        }
      );
    });
  }

  async loginUser(email: string, password: string) {
    return runInInjectionContext(this.injector, async () => {
      try {
        const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;

        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          console.log('Usuario autenticado:', user);

          this.getProfile(user.uid);
          this.router.navigateByUrl('/profile');
        } else {
          throw new Error('No se pudo obtener el usuario');
        }
      } catch (error: any) {
        console.error('Error al iniciar sesión:', error);
        const toast = await this.toastCtrl.create({
          message: error?.message || 'Error al iniciar sesión.',
          duration: 2000,
          color: 'danger'
        });
        await toast.present();
        throw error;
      }
    });
  }

  async loginByUsername(username: string, password: string) {
    try {
      const users = await firstValueFrom(
        this.db.getCollectionByCustomparam('usersPrueba', 'username', username)
      );

      if (!Array.isArray(users) || users.length === 0) {
        throw new Error('Usuario no encontrado');
      }

      const user = users[0];
      const email = user.email;

      return this.loginUser(email, password);
    } catch (error: any) {
      console.error('Error en login por username:', error);
      const toast = await this.toastCtrl.create({
        message: error?.message || 'Error al iniciar sesión.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
      throw error;
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      localStorage.clear();
      this.profile = null;

      const toast = await this.toastCtrl.create({
        message: 'Sesión cerrada correctamente.',
        duration: 2000,
        color: 'medium'
      });
      await toast.present();

      this.router.navigate(['/start']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  async loginGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      // @ts-ignore
      const userCredential = await this.afAuth.signInWithPopup(provider);
      if (userCredential.user) {
        const user = userCredential.user;
        await this.handleGoogleUser(user);
        this.router.navigate(['/profile']);
      }
    } catch (error) {
      this.handleAuthError(error);
    }
  }

  private async handleGoogleUser(user: any) {
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    await runInInjectionContext(this.injector, async () => {
      await this.firestore.collection('usersPrueba').doc(user.uid)
        .set(userData, { merge: true });
    });
    localStorage.setItem('profile', JSON.stringify(userData));
    this.profile = userData;
  }

  private async handleAuthError(error: any) {
    console.error('Error de autenticación:', error);
    const toast = await this.toastCtrl.create({
      message: error?.message || 'Error en autenticación con Google',
      duration: 2000,
      color: 'danger'
    });
    await toast.present();
  }

  // Método opcional para comprobar si hay sesión activa
  /*
  verifyIsLogued(): boolean {
    const user = localStorage.getItem('user');
    return !!user;
  }
  */
}
