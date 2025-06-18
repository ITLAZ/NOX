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

  @Output() tipoSeleccionado = new EventEmitter<string>();

  tipos: string[] = [];
  private db: DatabaseService;
  private subscription: Subscription = new Subscription();
  activeTipo: string | null = null;

  constructor(db: DatabaseService) {
    this.db = db;
  }

  ngOnInit() {
    if (this.eventos) {
      this.cargarTiposEventos();
    } else if (this.lugares) {
      this.cargarTiposLocales();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['eventos'] && changes['eventos'].currentValue) {
      this.cargarTiposEventos();
    } else if (changes['lugares'] && changes['lugares'].currentValue) {
      this.cargarTiposLocales();
    }
  }

  cargarTiposLocales() {
    this.subscription.add(
      this.db.getLocales().subscribe(locales => {
        const tiposLocales = locales.map((local: any) => local.tipo).filter(Boolean);
        this.tipos = Array.from(new Set(tiposLocales));
      })
    );
  }

  cargarTiposEventos() {
    this.subscription.add(
      this.db.getEvents().subscribe(eventos => {
        const tiposEventos = eventos.map((evento: any) => evento.tipo).filter(Boolean);
        this.tipos = Array.from(new Set(tiposEventos));
      })
    );
  }

  onTipoCardClick(tipo: string) {
    if (this.activeTipo === tipo) {
      this.activeTipo = null;
      this.tipoSeleccionado.emit('');
    } else {
      this.activeTipo = tipo;
      this.tipoSeleccionado.emit(tipo);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
