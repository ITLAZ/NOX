import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { AuthService } from 'src/app/services/auth.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.page.html',
  styleUrls: ['./my-tickets.page.scss'],
  standalone: false
})
export class MyTicketsPage implements OnInit {
  tickets: any[] = [];
  eventsMap: { [id: string]: string } = {};
  userId: string = '';

  constructor(
    private db: DatabaseService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Traer todas las entradas de todos los eventos
    this.db.getAllSubcollectionGroup('entradas').subscribe((tickets: any[]) => {
      // Obtener todos los ids de eventos únicos
      const eventIds = Array.from(new Set(tickets.map(t => t.evento)));
      if (eventIds.length === 0) {
        this.tickets = tickets;
        return;
      }
      // Traer los documentos de eventos y comparar el id
      this.db.getEvents().subscribe((events: any[]) => {
        // Crear un mapa id -> nombre
        const eventsMap: { [id: string]: string } = {};
        events.forEach(event => {
          if (event && event.id) {
            eventsMap[event.id] = event.nombre || event.name || event.id;
          }
        });
        // Asignar el nombre del evento a cada ticket usando el campo evento como id
        this.tickets = tickets.map(ticket => ({
          ...ticket,
          eventoNombre: eventsMap[ticket.evento] || ticket.evento
        }));
      });
    });
  }

  verTicket(ticket: any) {
    this.router.navigate(['/qr-ticket'], { queryParams: { ...ticket } });
  }
}
