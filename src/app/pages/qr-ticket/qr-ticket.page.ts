import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
// @ts-ignore
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-ticket',
  templateUrl: './qr-ticket.page.html',
  styleUrls: ['./qr-ticket.page.scss'],
  standalone: false
})
export class QrTicketPage implements OnInit {
  @ViewChild('qrCanvas', { static: false }) qrCanvas!: ElementRef;
  ticket: any = {};
  mostrarAsientos = false;
  asientosArray: string[] = [];

  constructor(private route: ActivatedRoute, private db: DatabaseService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (!params || !params['evento']) {
        console.error('No se proporcionó un evento válido');
        return;
      }

      this.ticket = { ...params };
      this.generateRandomData();
      this.asientosArray = this.ticket.asiento?.split(', ') || ['A1'];

      this.db.getEventPorId(params['evento']).subscribe(eventoData => {
        if (eventoData) {
          this.ticket.eventoNombre = eventoData.nombre;
          this.ticket.fecha = eventoData.fechas?.inicio?.toDate();
          this.ticket.precio = this.ticket.total || this.ticket.precio;
          setTimeout(() => this.generateQR(), 300);
        }
      });
    });
  }

  toggleAsientos() {
    this.mostrarAsientos = !this.mostrarAsientos;
  }

  generateRandomData() {
    if (!this.ticket.codigo) {
      this.ticket.codigo = Math.floor(10000000 + Math.random() * 90000000).toString();
    }
    
    const cantidad = this.ticket.cantidad || 1;
    if (!this.ticket.asiento) {
      this.ticket.asiento = this.generateRandomSeats(cantidad);
    }
  }

  generateRandomSeats(count: number): string {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const seats = [];
    
    for (let i = 0; i < count; i++) {
      const row = rows[Math.floor(Math.random() * rows.length)];
      const number = Math.floor(Math.random() * 20) + 1;
      seats.push(`${row}${number}`);
    }
    
    return seats.join(', ');
  }

  async generateQR() {
    try {
      if (!this.qrCanvas?.nativeElement || !this.ticket) return;

      const qrData = JSON.stringify({
        evento: this.ticket.eventoNombre || this.ticket.eventName || this.ticket.evento,
        fecha: this.ticket.fecha ? this.ticket.fecha.toISOString() : 'Sin fecha',
        asientos: this.ticket.asiento,
        precio: this.ticket.precio || this.ticket.price || this.ticket.total || '0',
        codigo: this.ticket.codigo
      });

      await QRCode.toCanvas(this.qrCanvas.nativeElement, qrData, { 
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
    } catch (error) {
      console.error('Error generando QR:', error);
    }
  }
}