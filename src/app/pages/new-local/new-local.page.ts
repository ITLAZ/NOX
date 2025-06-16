import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-local',
  templateUrl: './new-local.page.html',
  styleUrls: ['./new-local.page.scss'],
  standalone: false
})
export class NewLocalPage implements OnInit {
  localForm!: FormGroup;
  isSubmitting = false;
  showCoverInput = false;

  constructor(
    private fb: FormBuilder,
    private databaseService: DatabaseService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.localForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      direccion: ['', [Validators.required, Validators.maxLength(100)]],
      horarioApertura: ['', [Validators.required, this.horaValidator]],
      horarioCierre: ['', [Validators.required, this.horaValidator]],
      dias: ['', Validators.required],
      tipo: ['', Validators.required],
      lat: ['', [Validators.required]],
      lng: ['', [Validators.required]],
      imagen: [''],
      etiquetas: [[]]
    });
  }

  private horaValidator(control: AbstractControl): ValidationErrors | null {
    const horaRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return horaRegex.test(control.value) ? null : { invalidHora: true };
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

    // Convertir días en array y limpiar espacios
    const diasArray = this.localForm.value.dias
      .split(/[,]+/)
      .map((dia: string) => dia.trim())
      .filter((dia: string) => dia !== '');

    const localData = {
      nombre: this.localForm.value.nombre,
      direccion: this.localForm.value.direccion,
      horas_atencion: {
        apertura: this.localForm.value.horarioApertura,
        cierre: this.localForm.value.horarioCierre
      },
      dias_atencion: diasArray,
      tipo: this.localForm.value.tipo,
      lat: parseFloat(this.localForm.value.lat),
      lng: parseFloat(this.localForm.value.lng),
      imagen: this.localForm.value.imagen,
      esLocal: true,
      open: true,
      etiquetas: this.localForm.value.etiquetas || []
    };

    try {
      await this.databaseService.addFirestoreDocument('locales', localData);
      await this.presentToast('Local agregado exitosamente.', 'success');
      this.localForm.reset();
      this.localForm.get('etiquetas')?.setValue([]); // Resetear etiquetas
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