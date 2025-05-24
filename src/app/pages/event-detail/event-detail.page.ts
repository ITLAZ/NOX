import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
  standalone: false
})
export class EventDetailPage implements OnInit {
  evento: any = null; // Información del evento
  entradas: any[] = []; // Entradas disponibles
  eventoId: string = ''; // ID del evento recibido por parámetro

  constructor(
    private route: ActivatedRoute,
    private db: DatabaseService
  ) {}

  ngOnInit() {
    // Recuperar el ID del evento desde los parámetros de la ruta
    this.route.queryParams.subscribe(params => {
      this.eventoId = params['id'] || '';
      if (this.eventoId) {
        this.loadEvento();
        this.loadEntradas();
      }
    });
  }

  // Cargar datos del evento
  loadEvento() {
    this.db.getEventPorId(this.eventoId).subscribe({
      next: data => {
        this.evento = data;
      },
      error: err => {
        console.error('Error al cargar evento:', err);
      }
    });
  }

  // Cargar entradas asociadas al evento
  loadEntradas() {
  this.db.getSubcollection('eventos', this.eventoId, 'entradas').subscribe({
    next: data => {
      console.log('Entradas recuperadas:', data); // Verifica que `cantidad` esté presente
      this.entradas = data;
    },
    error: err => {
      console.error('Error al cargar entradas:', err);
    }
  });
}

}
