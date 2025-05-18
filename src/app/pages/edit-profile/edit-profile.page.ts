import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service'; // usa tu servicio

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  standalone: false
})
export class EditProfilePage implements OnInit {
  userData: any = {};

  constructor(
    private auth: AuthService,
    private db: DatabaseService, // usa este servicio en lugar de firestore directo
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
        years: this.userData.years
      });

      localStorage.setItem('profile', JSON.stringify(this.userData));
      this.auth.getProfile(uid); // refrescar datos en auth service
      const toast = await this.toastCtrl.create({
        message: 'Perfil actualizado correctamente.',
        duration: 2000,
        color: 'success'
      });
      await toast.present();
      this.router.navigate(['/perfil']);
    } catch (error) {
      console.error('Error al actualizar perfil:', error);
      const toast = await this.toastCtrl.create({
        message: 'Error al actualizar perfil.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }
}