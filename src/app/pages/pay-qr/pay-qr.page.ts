import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
// @ts-ignore
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-pay-qr',
  templateUrl: './pay-qr.page.html',
  styleUrls: ['./pay-qr.page.scss'],
  standalone: false
})
export class PayQRPage implements OnInit {
  total: number = 0;
  expirationDate: string = '2025-12-31';
  expirationTime: string = '23:59';
  reference: string = 'Servicios';
  
  processing: boolean = false;
  paymentFailed: boolean = false;
  qrData: string = '';

  @ViewChild('qrCanvas', { static: false }) qrCanvas!: ElementRef;

  constructor(private cartService: CartService, private router: Router) {}

  async ngAfterViewInit() {
    await this.generateQR();
  }

  async generateQR() {
    if (this.qrCanvas) {
      await QRCode.toCanvas(this.qrCanvas.nativeElement, this.qrData, { width: 200 });
    }
  }

  ngOnInit() {
    this.total = this.cartService.getCheckoutTotal();
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    this.expirationDate = `${yyyy}-${mm}-${dd}`;
    this.expirationTime = '23:59:00';
    this.qrData = JSON.stringify({
      total: this.total,
      expirationDate: this.expirationDate,
      expirationTime: this.expirationTime,
      reference: this.reference
    });
    console.log('Total recibido:', this.total);
  }

  verifyPayment() {
    this.processing = true;
    this.paymentFailed = false;

    setTimeout(() => {
      this.processing = false;
      this.paymentFailed = true;
    }, 5000); // Espera de 5 segundos para simular la verificación del pago
  }

  retryPayment() {
    this.paymentFailed = false;
  }

  tryAnotherMethod() {
    this.router.navigate(['/pay-card']);
  }

  async downloadQR() {
    if (this.qrCanvas) {
      const canvas: HTMLCanvasElement = this.qrCanvas.nativeElement;
      const url = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = url;
      a.download = `qr_pago_${this.expirationDate}.png`;
      a.click();
    }
  }

  shareQR() {
    console.log('Compartir QR');
    // Implementa la lógica para compartir el QR
  }

}
