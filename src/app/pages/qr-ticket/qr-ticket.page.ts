import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// @ts-ignore
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-ticket',
  templateUrl: './qr-ticket.page.html',
  styleUrls: ['./qr-ticket.page.scss'],
  standalone: false
})
export class QrTicketPage implements OnInit {
  ticket: any = {};
  @ViewChild('qrCanvas', { static: false }) qrCanvas!: ElementRef;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ticket = params;
      setTimeout(() => this.generateQR(), 100); // Espera a que el canvas esté en el DOM
    });
  }

  async generateQR() {
    if (this.qrCanvas && this.ticket) {
      const qrData = JSON.stringify({
        evento: this.ticket.eventoNombre || this.ticket.eventName,
        fecha: this.ticket.fecha,
        asiento: this.ticket.asiento,
        precio: this.ticket.precio || this.ticket.price,
        codigo: this.ticket.codigo || ''
      });
      await QRCode.toCanvas(this.qrCanvas.nativeElement, qrData, { width: 200 });
    }
  }
}
