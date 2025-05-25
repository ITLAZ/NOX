import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSearchbar } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  standalone: false,
})
export class FilterModalComponent implements OnInit {
  @Input() initialTab: string = 'tab1';
  selectedTab: string = 'tab1';
  currentBreakpoint: number = 0.95;

  // Datos originales
  allLugares: any[] = [];
  allEventos: any[] = [];
  // Datos filtrados
  lugares: any[] = [];
  eventos: any[] = [];

  filtroEtiqueta: string = '';
  filtroTipo: string = '';
  searchTerm: string = '';

  @ViewChild('searchbar', { static: false }) searchbar!: IonSearchbar;

  constructor(private modalController: ModalController, private db: DatabaseService) {}

  ngOnInit() {
    this.selectedTab = this.initialTab || 'tab1';
    this.cargarDatos();
  }

  cargarDatos() {
    this.db.getLocales().subscribe(lugares => {
      this.allLugares = lugares;
      this.aplicarFiltros();
    });
    this.db.getEvents().subscribe(eventos => {
      this.allEventos = eventos;
      this.aplicarFiltros();
    });
  }

  aplicarFiltros() {
    // Filtro para lugares
    let lugaresFiltrados = this.allLugares;
    if (this.filtroEtiqueta) {
      lugaresFiltrados = lugaresFiltrados.filter(l => (l.etiquetas || []).includes(this.filtroEtiqueta));
    }
    if (this.filtroTipo) {
      lugaresFiltrados = lugaresFiltrados.filter(l => l.tipo === this.filtroTipo);
    }
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      lugaresFiltrados = lugaresFiltrados.filter(l =>
        (l.nombre || '').toLowerCase().includes(term) ||
        (l.descripcion || '').toLowerCase().includes(term)
      );
    }
    this.lugares = lugaresFiltrados;

    // Filtro para eventos
    let eventosFiltrados = this.allEventos;
    if (this.filtroEtiqueta) {
      eventosFiltrados = eventosFiltrados.filter(e => (e.etiquetas || []).includes(this.filtroEtiqueta));
    }
    if (this.filtroTipo) {
      eventosFiltrados = eventosFiltrados.filter(e => e.tipo === this.filtroTipo);
    }
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      eventosFiltrados = eventosFiltrados.filter(e =>
        (e.nombre || '').toLowerCase().includes(term) ||
        (e.descripcion || '').toLowerCase().includes(term)
      );
    }
    this.eventos = eventosFiltrados;
  }

  updateCurrentBreakpoint(breakpoint: number) {
    this.currentBreakpoint = breakpoint;
  }

  onSegmentChange(event: any) {
    this.selectedTab = event.detail.value;
    this.filtroEtiqueta = '';
    this.filtroTipo = '';
    this.aplicarFiltros();
  }

  onEtiquetaSeleccionada(etiqueta: string) {
    this.filtroEtiqueta = etiqueta;
    this.filtroTipo = '';
    this.aplicarFiltros();
  }

  onTipoSeleccionado(tipo: string) {
    this.filtroTipo = tipo;
    this.filtroEtiqueta = '';
    this.aplicarFiltros();
  }

  onBuscar(term: string) {
    this.searchTerm = term;
    this.aplicarFiltros();
  }

  safeString(val: any): string {
    return val == null ? '' : String(val);
  }

  async expandModal() {
    const modal = await this.modalController.getTop();
    if (modal) {
      modal.setCurrentBreakpoint(0.8);
    }
    setTimeout(() => this.searchbar && this.searchbar.setFocus(), 300);
  }

  loadMore(event: any) {
    // Aquí podrías implementar scroll infinito real si tuvieras paginación
    event.target.complete?.();
  }

  // Asegura que la fecha sea string o Date, nunca null
  getFechaEvento(fecha: any): string {
    if (!fecha) return '';
    if (typeof fecha === 'object' && typeof fecha.toDate === 'function') {
      const d = fecha.toDate();
      if (!d) return '';
      return d instanceof Date ? d.toISOString() : '';
    }
    if (fecha instanceof Date) {
      return fecha.toISOString();
    }
    if (typeof fecha === 'string') {
      return fecha;
    }
    return '';
  }
}
