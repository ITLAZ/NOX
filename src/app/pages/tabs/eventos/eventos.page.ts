import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
  standalone: false,
})
export class EventosPage implements OnInit {

  events: any[] = [];
  allEvents: any[] = [];
  isLoading = true;
  isWeb = window.innerWidth >= 769;

  constructor(private db: DatabaseService, private router: Router) {}


  ngOnInit() {
    window.addEventListener('resize', () => {
      this.isWeb = window.innerWidth >= 769;
    });
    this.db.getEvents().subscribe(data => {
      console.log('Eventos cargados directamente:', data);
      this.allEvents = data;
      this.events = data;
      this.isLoading = false;
    });
  }

  onEtiquetaSeleccionada(etiqueta: string) {
    if (!etiqueta) {
      this.events = this.allEvents;
      return;
    }
    this.events = this.allEvents.filter(evento => (evento.etiquetas || []).includes(etiqueta));
  }

  irAEvento(evento: any) {
      this.router.navigate(['/event-detail'], {
        queryParams: { id: evento.id }
      });
    }
  formatFecha(fechaTimestamp: any): string {
    if (!fechaTimestamp) return 'Fecha no disponible';

    // Convierte el timestamp de Firebase si es necesario
    if (fechaTimestamp.toDate) {
      fechaTimestamp = fechaTimestamp.toDate();
    }

    return fechaTimestamp.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  }
}
