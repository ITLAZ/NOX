import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Asegúrate de ajustar la ruta
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-buy-check',
  templateUrl: './buy-check.page.html',
  styleUrls: ['./buy-check.page.scss'],
  standalone: false
})
export class BuyCheckPage implements OnInit {

  subtotal: number = 0;
  commission: number = 5;
  discountPercentage: number = 0;
  discountAmount: number = 0;
  total: number = 0;
  items: any[] = [];

  coupons = [
    { label: 'Sin cupón', value: 0 },
    { label: 'Cupón 10%', value: 10 },
    { label: 'Cupón 15%', value: 15 },
    { label: 'Cupón 20%', value: 20 },
  ];

  constructor(private router: Router, private cartService: CartService) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state;
    this.subtotal = state?.['total'] || 0;
    this.items = state?.['items'] || [];
    this.calculateTotal();
  }

  ngOnInit() {}

  onCouponChange(value: number) {
    this.discountPercentage = value;
    this.calculateTotal();
  }

  calculateTotal() {
    this.discountAmount = (this.discountPercentage / 100) * this.subtotal;
    this.total = this.subtotal - this.discountAmount + this.commission;
  }

 goToQRPage() {
  this.guardarCompra();
  this.cartService.setCheckoutTotal(this.total);
  this.router.navigate(['/pay-qr']);
}

goToCardPage() {
  this.guardarCompra();
  this.cartService.setCheckoutTotal(this.total);
  this.router.navigate(['/pay-card']);
}

guardarCompra() {
  const now = new Date().toISOString().split('T')[0];
  const compra: any = {
    fecha: now,
    total: this.total,
    items: this.items.map(item => ({
      producto: item.producto || item.tipo || 'Producto desconocido', // Nombre del producto
      cantidad: item.quantity, // Cantidad de entradas o productos
    })),
  };

  const primerItem = this.items[0];
  if (primerItem.local) {
    compra.local = primerItem.local;
  } else if (primerItem.evento) {
    compra.evento = primerItem.evento;
  }

  localStorage.setItem('ultimaCompra', JSON.stringify(compra));
}
}
