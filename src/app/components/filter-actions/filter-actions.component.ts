import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'filter-actions',
  templateUrl: './filter-actions.component.html',
  styleUrls: ['./filter-actions.component.scss'],
  standalone: false,
})
export class FilterActionsComponent implements OnInit, OnChanges {
  @Input() showCards: boolean = false;
  @Input() eventos: boolean = false;
  @Input() lugares: boolean = false;

  @Output() etiquetaSeleccionada = new EventEmitter<string>();
  @Output() tipoSeleccionado = new EventEmitter<string>();

  etiquetasLocales: string[] = [];
  etiquetasEventos: string[] = [];
  etiquetas: string[] = [];
  tipos: string[] = [];
  private db: DatabaseService;
  private subscription: Subscription = new Subscription();

  constructor(db: DatabaseService) {
    this.db = db;
  }

  ngOnInit() {
    if (this.eventos) {
      this.cargarEtiquetasEventos();
    } else if (this.lugares) {
      this.cargarEtiquetasLocales();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['eventos'] && changes['eventos'].currentValue) {
      this.cargarEtiquetasEventos();
    } else if (changes['lugares'] && changes['lugares'].currentValue) {
      this.cargarEtiquetasLocales();
    }
  }

  cargarEtiquetasLocales() {
    this.subscription.add(
      this.db.getLocales().subscribe(locales => {
        // Reemplazo de flatMap por map + reduce
        const etiquetas = locales.map((local: any) => local.etiquetas || []).reduce((acc, curr) => acc.concat(curr), []);
        this.etiquetasLocales = Array.from(new Set(etiquetas));
        this.etiquetas = this.etiquetasLocales;

        // Obtener tipos únicos de locales
        const tiposLocales = locales.map((local: any) => local.tipo).filter(Boolean);
        this.tipos = Array.from(new Set(tiposLocales));
      })
    );
  }

  cargarEtiquetasEventos() {
    this.subscription.add(
      this.db.getEvents().subscribe(eventos => {
        // Reemplazo de flatMap por map + reduce
        const etiquetas = eventos.map((evento: any) => evento.etiquetas || []).reduce((acc, curr) => acc.concat(curr), []);
        this.etiquetasEventos = Array.from(new Set(etiquetas));
        this.etiquetas = this.etiquetasEventos;

        // Obtener tipos únicos de eventos
        const tiposEventos = eventos.map((evento: any) => evento.tipo).filter(Boolean);
        this.tipos = Array.from(new Set(tiposEventos));
      })
    );
  }

  onChipEtiquetaClick(etiqueta: string) {
    this.etiquetaSeleccionada.emit(etiqueta);
  }

  onTipoCardClick(tipo: string) {
    this.tipoSeleccionado.emit(tipo);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
