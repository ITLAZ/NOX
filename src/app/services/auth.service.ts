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

  // --- Métodos para manejar cookies ---
  private setAuthCookie(value: string) {
    // Cookie válida por 30 días
    document.cookie = `nox_auth=${value}; path=/; max-age=${60 * 60 * 24 * 30}`;
  }

  private getAuthCookie(): string | null {
    const match = document.cookie.match(new RegExp('(^| )nox_auth=([^;]+)'));
    return match ? match[2] : null;
  }

  private deleteAuthCookie() {
    document.cookie = 'nox_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  }

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
    // Eliminada la lógica de restaurar sesión desde la cookie
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
          this.setAuthCookie(user.uid); // Guardar cookie persistente
          console.log('Usuario autenticado:', user);

          this.getProfile(user.uid);
          this.router.navigateByUrl('/home'); // Redirigir a home después de login
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
      this.deleteAuthCookie(); // Eliminar cookie al cerrar sesión

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
        this.setAuthCookie(user.uid); // Guardar cookie persistente
        // Quitar navegación aquí, se hará en el componente
      }
    } catch (error) {
      this.handleAuthError(error);
    }
  }

  private async handleGoogleUser(user: any) {
    await runInInjectionContext(this.injector, async () => {
      const uid = user.uid;
      const email = user.email;
      const name = user.displayName; // Usar 'name' para el perfil
      const photoUrl = user.photoURL; // Usar 'photoUrl' para el perfil

      // Comprobar si el usuario ya existe en Firestore
      const docRef = this.firestore.collection('usersPrueba').doc(uid);
      const docSnap = await docRef.get().toPromise();
      if (!docSnap || !docSnap.exists) {
        try {
          await docRef.set({
            email,
            name,
            photoUrl,
            // Otros campos que quieras agregar
          });
          console.log('Usuario guardado en Firestore:', { email, name, photoUrl });
        } catch (error) {
          console.error('Error al guardar usuario en Firestore:', error);
        }
      }
      // Actualizar el perfil local y en localStorage
      const profile = { uid, email, name, photoUrl };
      localStorage.setItem('profile', JSON.stringify(profile));
      this.profile = profile;
    });
  }

  private async handleAuthError(error: any) {
    await runInInjectionContext(this.injector, async () => {
      console.error('Error de autenticación:', error);
      const toast = await this.toastCtrl.create({
        message: error?.message || 'Error de autenticación.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    });
  }

  /**
   * Devuelve una promesa que resuelve a true si hay usuario autenticado en Firebase
   * Usa authState para esperar correctamente la restauración de sesión tras recargar.
   */
  public async isLoggedInAsync(): Promise<boolean> {
    return new Promise(resolve => {
      const sub = this.afAuth.authState.subscribe(user => {
        sub.unsubscribe();
        resolve(!!user);
      });
    });
  }
}
