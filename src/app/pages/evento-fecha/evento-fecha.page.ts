import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-fecha',
  templateUrl: './evento-fecha.page.html',
  styleUrls: ['./evento-fecha.page.scss'],
  standalone: false
})
export class EventoFechaPage implements OnInit {
  eventosAgrupados: { fecha: string, eventos: any[] }[] = [];
  ordenAscendente: boolean = true;
  cargando: boolean = true;
  router: Router;

  constructor(private db: DatabaseService, router: Router) {
    this.router = router;
  }

  ngOnInit() {
    this.cargarEventos();
  }

  cambiarOrden() {
    this.ordenAscendente = !this.ordenAscendente;
    this.cargarEventos();
  }

  get iconOrden(): string {
    return this.ordenAscendente ? 'arrow-up-outline' : 'arrow-down-outline';
  }

  cargarEventos() {
    this.cargando = true;
    this.db.getEvents().subscribe(eventos => {
      function parseFecha(fecha: any): Date | null {
        if (!fecha) return null;
        if (fecha instanceof Date) return fecha;
        if (typeof fecha === 'string') {
          const d = new Date(fecha);
          return isNaN(d.getTime()) ? null : d;
        }
        if (typeof fecha === 'object' && fecha.seconds) {
          // Timestamp de Firebase
          return new Date(fecha.seconds * 1000);
        }
        return null;
      }
      const eventosMapeados = eventos.map(ev => {
        const fechaInicio = parseFecha(ev.fechas && ev.fechas.inicio);
        const fechaFinal = parseFecha(ev.fechas && ev.fechas.final);
        return {
          id: ev.id || ev.uid || '',
          nombreEvento: ev.nombre || 'Sin nombre',
          fechaInicio: fechaInicio,
          fechaFinal: fechaFinal,
          lugar: ev.direccion || '',
          precio: ev.etiquetas && ev.etiquetas.length > 0 ? ev.etiquetas.join(', ') : '',
          imagen: ev.imagen || 'src/assets/images/placeholder.png',
        };
      });
      eventosMapeados.sort((a, b) => {
        const fechaA = a.fechaInicio instanceof Date ? a.fechaInicio.getTime() : 0;
        const fechaB = b.fechaInicio instanceof Date ? b.fechaInicio.getTime() : 0;
        return this.ordenAscendente ? fechaA - fechaB : fechaB - fechaA;
      });
      // Agrupar por fecha (solo día)
      const grupos: { [fecha: string]: any[] } = {};
      eventosMapeados.forEach(ev => {
        const fechaStr = ev.fechaInicio ? ev.fechaInicio.toLocaleDateString() : 'Sin fecha';
        if (!grupos[fechaStr]) grupos[fechaStr] = [];
        grupos[fechaStr].push(ev);
      });
      this.eventosAgrupados = Object.keys(grupos).sort((a, b) => {
        const da = new Date(a).getTime();
        const db = new Date(b).getTime();
        return this.ordenAscendente ? da - db : db - da;
      }).map(fecha => ({ fecha, eventos: grupos[fecha] }));
      this.cargando = false;
    });
  }

  irADetalle(id: string) {
    if (id) {
      this.router.navigate(['/event-detail'], {
        queryParams: { id: id }
      });
    }
  }
}
