import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.page.html',
  styleUrls: ['./list-events.page.scss'],
  standalone: false,
})
export class ListEventsPage implements OnInit {
  eventos: any[] = [];

  constructor(
    private databaseService: DatabaseService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadEventos();
  }

  async loadEventos() {
    try {
      const data = await firstValueFrom(this.databaseService.fetchFirestoreCollection('eventos'));
      this.eventos = data.map((doc: any) => ({ id: doc.id, ...doc }));
    } catch (error) {
      console.error('Error al cargar los eventos:', error);
    }
  }

  irANuevoEvento() {
    this.router.navigate(['/new-event']); // Ajusta esta ruta según tu configuración
  }

  goToEditPanel(localId: string) {
    this.router.navigate(['/panel-admin-2', { id: localId }]); // Ajusta la ruta según tu configuración
  }

  async confirmarEliminarEvento(eventoId: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: '¿Estás seguro de que deseas eliminar este evento?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.eliminarEvento(eventoId);
          },
        },
      ],
    });

    await alert.present();
  }

  async eliminarEvento(eventoId: string) {
    try {
      await this.databaseService.deleteFireStoreDocument('eventos', eventoId);
      this.eventos = this.eventos.filter(evento => evento.id !== eventoId);
    } catch (error) {
      console.error('Error al eliminar el evento:', error);
    }
  }
}
