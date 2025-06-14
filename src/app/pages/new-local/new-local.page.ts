import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-local',
  templateUrl: './new-local.page.html',
  styleUrls: ['./new-local.page.scss'],
  standalone: false,
})
export class NewLocalPage implements OnInit {
  localForm!: FormGroup;
  isSubmitting = false;
  showCoverInput = false;

  constructor(
    private fb: FormBuilder,
    private databaseService: DatabaseService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.localForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      direccion: ['', [Validators.required, Validators.maxLength(100)]],
      horario: ['', Validators.required],
      dias: ['', Validators.required],
      tipo: ['', Validators.required],
      lat: [
        '',
        [
          Validators.required,
        ],
      ],
      lng: [
        '',
        [
          Validators.required,
        ],
      ],
      imagen: [''],
    });
  }

  toggleCoverInput() {
    this.showCoverInput = !this.showCoverInput;
  }

  async onSubmit() {
    if (this.localForm.invalid) {
      await this.presentToast('Por favor, completa todos los campos correctamente.', 'warning');
      return;
    }

    this.isSubmitting = true;

    const localData = {
      ...this.localForm.value,
      esLocal: true,
      open: true,
    };

    try {
      await this.databaseService.addFirestoreDocument('locales', localData);
      await this.presentToast('Local agregado exitosamente.', 'success');
      this.localForm.reset();
    } catch (error) {
      console.error('Error al agregar el local:', error);
      await this.presentToast('Ocurrió un error al agregar el local.', 'danger');
    } finally {
      this.isSubmitting = false;
    }
  }

  private async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 2000,
    });
    await toast.present();
  }
}
