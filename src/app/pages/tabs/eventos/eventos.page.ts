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
  private bannersInitialized = false;

  constructor(private db: DatabaseService, private router: Router) {}


  ngOnInit() {
    window.addEventListener('resize', () => {
      this.isWeb = window.innerWidth >= 769;
    });
    this.db.getEvents().subscribe(data => {
      this.allEvents = data;
      this.events = data;
      this.isLoading = false;
      if (!this.bannersInitialized) {
        this.bannersInitialized = true;
      }
    });
  }

  // Quitar lógica de banners aleatorios y exponer solo los primeros 5 eventos
  get bannerEventsLimited() {
    return this.events.slice(0, 5);
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

  // Para trackBy en banners y evitar problemas con Swiper
  trackByBannerId(index: number, item: any) {
    return item && item.id ? item.id : index;
  }
}
