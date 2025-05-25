import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


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

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.total = this.cartService.getCheckoutTotal();
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
    console.log('Intentando otro método de pago...');
    // Aquí puedes redirigir a otra página o lógica
  }
  downloadQR() {
    console.log('Descargar QR');
    // Implementa la lógica para descargar la imagen QR
  }

  shareQR() {
    console.log('Compartir QR');
    // Implementa la lógica para compartir el QR
  }

}
