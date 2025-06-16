import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.page.html',
  styleUrls: ['./new-event.page.scss'],
  standalone: false,
})
export class NewEventPage implements OnInit {
  eventForm!: FormGroup;
  isSubmitting = false;
  showCoverInput = false;

  constructor(
    private fb: FormBuilder,
    private databaseService: DatabaseService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
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

  toggleCoverInput() {
    this.showCoverInput = !this.showCoverInput;
  }

  async onSubmit() {
    if (this.eventForm.invalid) {
      await this.presentToast('Por favor, completa todos los campos correctamente.', 'warning');
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
    };

    delete eventData.fechasInicio;
    delete eventData.fechasFinal;
    delete eventData.horarioInicio;
    delete eventData.horarioCierre;

    try {
      await this.databaseService.addFirestoreDocument('eventos', eventData);
      await this.presentToast('Evento agregado exitosamente.', 'success');
      this.eventForm.reset();
    } catch (error) {
      console.error('Error al agregar el evento:', error);
      await this.presentToast('Ocurrió un error al agregar el evento.', 'danger');
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
  
calendarVisibility = {
  fechasInicio: false,
  fechasFinal: false,
};

toggleCalendar(field: 'fechasInicio' | 'fechasFinal') {
  // Guarda el estado actual antes de cambiarlo
  const currentState = this.calendarVisibility[field];
  
  // Cierra todos los calendarios primero
  this.calendarVisibility = {
    fechasInicio: false,
    fechasFinal: false
  };
  
  // Si el calendario clickeado estaba cerrado, ábrelo
  if (!currentState) {
    this.calendarVisibility[field] = true;
  }
  // Si estaba abierto, el código anterior ya lo cerró (no hacemos nada más)
}
}
