import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  standalone: false,
})
export class EditProfilePage implements OnInit {
  userData: any = {};
  mostrarInput: boolean = false;

  constructor(
    private auth: AuthService,
    private db: DatabaseService,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.auth.profile) {
      this.userData = { ...this.auth.profile };
    }
  }

  async guardarCambios() {
    const uid = this.auth.profile?.id;
    if (!uid) return;

    try {
      await this.db.updateFireStoreDocument('usersPrueba', uid, {
        name: this.userData.name,
        lastname: this.userData.lastname,
        username: this.userData.username,
        years: this.userData.years,
        photoUrl: this.userData.photoUrl || '', // Incluye la imagen si se añadió
      });

      localStorage.setItem('profile', JSON.stringify(this.userData));
      this.auth.getProfile(uid); // Refrescar datos en el servicio de auth

      const toast = await this.toastCtrl.create({
        message: 'Perfil actualizado correctamente.',
        duration: 2000,
        color: 'success',
      });
      await toast.present();

      this.router.navigate(['/perfil']);
    } catch (error) {
      console.error('Error al actualizar perfil:', error);
      const toast = await this.toastCtrl.create({
        message: 'Error al actualizar perfil.',
        duration: 2000,
        color: 'danger',
      });
      await toast.present();
    }
  }
}
