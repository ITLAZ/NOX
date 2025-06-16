import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.page.html',
  styleUrls: ['./panel-admin.page.scss'],
  standalone: false,
})
export class PanelAdminPage implements OnInit {
  localForm!: FormGroup;
  localId: string = '';
  isSubmitting = false;
  showCoverInput = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, // Inyectar Router
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
      horario: ['', Validators.required],
      dias: ['', Validators.required],
      tipo: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
      imagen: ['']
    });
  }

  async loadLocalData() {
    try {
      const localData: any = await firstValueFrom(
        this.databaseService.getDocumentById('locales', this.localId)
      );
      
      if (localData) {
        this.localForm.patchValue({
          nombre: localData.nombre || '',
          direccion: localData.direccion || '',
          horario: localData.horario || '',
          dias: localData.dias || '',
          tipo: localData.tipo || '',
          lat: localData.lat || '',
          lng: localData.lng || '',
          imagen: localData.imagen || ''
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
      await this.presentToast('Por favor complete todos los campos requeridos', 'warning');
      return;
    }

    this.isSubmitting = true;

    try {
      const localData = {
        ...this.localForm.value,
        esLocal: true,
        open: true
      };

      await this.databaseService.updateFireStoreDocument('locales', this.localId, localData);
      await this.presentToast('Cambios guardados exitosamente', 'success');
      
      // Redirigir a list-locales después de guardar
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