import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { AuthService } from 'src/app/services/auth.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.page.html',
  styleUrls: ['./my-tickets.page.scss'],
  standalone: false
})
export class MyTicketsPage implements OnInit {
  tickets: any[] = [];
  userId: string = '';

  constructor(
    private db: DatabaseService,
    private auth: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    // Obtener userId del perfil guardado
    const storedProfile = localStorage.getItem('profile');
    const userData = storedProfile ? JSON.parse(storedProfile) : null;
    this.userId = userData?.id;

    if (!this.userId) {
      console.warn('Usuario no logueado o id no encontrado');
      return;
    }

    // Obtener historialCompraEvento del usuario
    this.db.getSubcollection('usersPrueba', this.userId, 'historialCompraEvento')
      .subscribe(async historialEventos => {
        if (!historialEventos || historialEventos.length === 0) {
          this.tickets = [];
          return;
        }

        // Para cada item en historial, traer evento y entradas para enriquecer datos
        const enrichedTickets = await Promise.all(historialEventos.map(async historialItem => {
          try {
            // Obtener datos del evento por id
            const eventoData: any = await firstValueFrom(this.db.getEventPorId(historialItem.evento));
            if (!eventoData) return historialItem;

            // Obtener subcolección 'entradas' del evento
            const entradas = await firstValueFrom(
              this.db.getSubcollection('eventos', historialItem.evento, 'entradas')
            );

            // Se asume que historialItem.items es un array; tomamos el primer producto para buscar
            const productoComprado = historialItem.items?.[0]?.producto;

            // Buscar entrada que coincida con el producto comprado
            const entradaEncontrada = entradas.find(e => e.producto === productoComprado);

            return {
              ...historialItem,
              eventoNombre: eventoData.nombre,
              eventoTipo: eventoData.tipo,
              eventoDireccion: eventoData.direccion,
              eventoFecha: historialItem.fecha,
              descripcion: entradaEncontrada?.descripcion || '',  // <-- acá
              producto: productoComprado,
              cantidad: historialItem.items?.[0]?.cantidad || 0,
              total: historialItem.total || 0
            };

          } catch (error) {
            console.warn('Error cargando datos para historialItem', historialItem, error);
            return historialItem;
          }
        }));

        this.tickets = enrichedTickets;
      });
  }

  verTicket(ticket: any) {
  // Navegar pasando los datos relevantes como queryParams
  this.router.navigate(['/qr-ticket'], {
    queryParams: {
      evento: ticket.evento, // ID del evento
      producto: ticket.producto,
      cantidad: ticket.cantidad,
      total: ticket.total,
      descripcion: ticket.descripcion,
      eventoNombre: ticket.eventoNombre,
      eventoTipo: ticket.eventoTipo,
      eventoDireccion: ticket.eventoDireccion,
      eventoFecha: ticket.eventoFecha,
    },
  });
}
}
