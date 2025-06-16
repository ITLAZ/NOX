import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-panel-admin-2',
  templateUrl: './panel-admin-2.page.html',
  styleUrls: ['./panel-admin-2.page.scss'],
  standalone: false,
})
export class PanelAdmin2Page implements OnInit {
  eventForm!: FormGroup;
  eventId: string = '';
  isSubmitting = false;
  showCoverInput = false;
  calendarVisibility = {
    fechasInicio: false,
    fechasFinal: false,
  };

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private databaseService: DatabaseService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.eventId = this.route.snapshot.paramMap.get('id') || '';
    if (this.eventId) {
      this.loadEventData();
    }
  }

  initializeForm() {
    this.eventForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      direccion: ['', [Validators.required, Validators.maxLength(100)]],
      tipo: ['', Validators.required],
      fechasInicio: ['', Validators.required],
      fechasFinal: ['', Validators.required],
      horarioInicio: ['', Validators.required],
      horarioCierre: ['', Validators.required],
      imagen: [''],
      etiquetas: [[]],
    });
  }

  async loadEventData() {
    try {
      const eventData: any = await firstValueFrom(
        this.databaseService.getDocumentById('eventos', this.eventId)
      );

      if (eventData) {
        this.eventForm.patchValue({
          nombre: eventData.nombre || '',
          direccion: eventData.direccion || '',
          tipo: eventData.tipo || '',
          fechasInicio: this.formatDateForInput(eventData.fechas?.inicio) || '',
          fechasFinal: this.formatDateForInput(eventData.fechas?.final) || '',
          horarioInicio: eventData.horario?.inicio || '',
          horarioCierre: eventData.horario?.cierre || '',
          imagen: eventData.imagen || '',
          etiquetas: eventData.etiquetas || []
        });
      }
    } catch (error) {
      console.error('Error al cargar datos del evento:', error);
      this.presentToast('Error al cargar los datos del evento', 'danger');
    }
  }

  private formatDateForInput(date: any): string {
  if (!date) return '';
  const d = new Date(date.seconds * 1000); // Asumiendo Firestore Timestamp
  return d.toISOString(); // Devuelve un formato completo compatible con ion-datetime
}


  toggleCalendar(field: 'fechasInicio' | 'fechasFinal') {
    const currentState = this.calendarVisibility[field];
    this.calendarVisibility = {
      fechasInicio: false,
      fechasFinal: false
    };
    if (!currentState) {
      this.calendarVisibility[field] = true;
    }
  }

  async onSubmit() {
    if (this.eventForm.invalid) {
      await this.presentToast('Por favor complete todos los campos correctamente', 'warning');
      return;
    }

    this.isSubmitting = true;

    const eventData = {
      ...this.eventForm.value,
      fechas: {
        inicio: new Date(this.eventForm.value.fechasInicio),
        final: new Date(this.eventForm.value.fechasFinal),
      },
      horario: {
        inicio: this.eventForm.value.horarioInicio,
        cierre: this.eventForm.value.horarioCierre,
      },
      esLocal: false,
      etiquetas: this.eventForm.value.etiquetas || []
    };

    delete eventData.fechasInicio;
    delete eventData.fechasFinal;
    delete eventData.horarioInicio;
    delete eventData.horarioCierre;

    try {
      await this.databaseService.updateFireStoreDocument('eventos', this.eventId, eventData);
      await this.presentToast('Evento actualizado exitosamente', 'success');
      this.router.navigate(['/perfil']);
    } catch (error) {
      console.error('Error al actualizar el evento:', error);
      await this.presentToast('Error al actualizar el evento', 'danger');
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

  toggleCoverInput() {
    this.showCoverInput = !this.showCoverInput;
  }
}
