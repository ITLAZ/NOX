import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.page.html',
  styleUrls: ['./panel-admin.page.scss'],
  standalone: false
})
export class PanelAdminPage implements OnInit {
  localForm!: FormGroup;
  localId: string = '';
  isSubmitting = false;
  showCoverInput = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private databaseService: DatabaseService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.localId = this.route.snapshot.paramMap.get('id') || '';
    if (this.localId) {
      this.loadLocalData();
    }
  }

  initializeForm() {
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

  async loadLocalData() {
    try {
      const localData: any = await firstValueFrom(
        this.databaseService.getDocumentById('locales', this.localId)
      );

      if (localData) {
        // Convertir estructura de datos para el formulario
        this.localForm.patchValue({
          nombre: localData.nombre || '',
          direccion: localData.direccion || '',
          horarioApertura: localData.horas_atencion?.apertura || '',
          horarioCierre: localData.horas_atencion?.cierre || '',
          dias: localData.dias_atencion?.join(', ') || '',
          tipo: localData.tipo || '',
          lat: localData.lat || '',
          lng: localData.lng || '',
          imagen: localData.imagen || '',
          etiquetas: localData.etiquetas || []
        });
      }
    } catch (error) {
      console.error('Error al cargar datos del local:', error);
      this.presentToast('Error al cargar los datos del local', 'danger');
    }
  }

  toggleCoverInput() {
    this.showCoverInput = !this.showCoverInput;
  }

  async onSubmit() {
    if (this.localForm.invalid) {
      await this.presentToast('Por favor complete todos los campos correctamente', 'warning');
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
      await this.databaseService.updateFireStoreDocument('locales', this.localId, localData);
      await this.presentToast('Cambios guardados exitosamente', 'success');
      this.router.navigate(['/list-locales']);
    } catch (error) {
      console.error('Error al guardar cambios:', error);
      await this.presentToast('Error al guardar los cambios', 'danger');
    } finally {
      this.isSubmitting = false;
    }
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color
    });
    await toast.present();
  }
}