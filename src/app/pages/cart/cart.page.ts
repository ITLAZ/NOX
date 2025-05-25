import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false
})
export class CartPage implements OnInit {
  cartItems: any[] = [];
  total: number = 0;
  note: string = '';
  isLocal: boolean = false;
  returnPath: string = '';

  constructor(private cartService: CartService, public router: Router) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
  this.cartItems = this.cartService.getCart();
  console.log('Cart Items:', this.cartItems); // Log para depurar

  this.total = this.cartItems.reduce(
    (sum, item) =>
      (item.price || item.precio || 0) * (item.quantity || 1) + sum,
    0
  );

  if (this.cartItems.length > 0) {
    const firstItem = this.cartItems[0];
    console.log('First Item:', firstItem);

    // Verifica si el elemento tiene un lugarId para decidir si es un local
    this.isLocal = !!firstItem?.lugarId;
    console.log('isLocal:', this.isLocal);

    // Construye el path de retorno basado en la existencia de lugarId
    this.returnPath = this.isLocal
      ? `/lugares` // Ruta para locales
      : `/eventos`; // Ruta para eventos
  } else {
    // Fallback si el carrito está vacío
    this.returnPath = '/home';
  }
}



  goToReturnPath() {
  if (this.returnPath) {
    this.router.navigate([this.returnPath]);
  } else {
    this.router.navigate(['/home']); // Fallback
  }
}

  removeItem(index: number) {
    this.cartService.removeItem(index);
    this.loadCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.note = '';
    this.loadCart();
  }

  increment(item: any) {
    item.quantity = (item.quantity || 1) + 1;
    this.cartService.updateCart(this.cartItems);
    this.loadCart();
  }

  decrement(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartService.updateCart(this.cartItems);
      this.loadCart();
    } else {
      this.removeItem(this.cartItems.indexOf(item));
    }
  }

  goToBuyCheck() {
    this.router.navigate(['/buy-check'], {
      state: {
        total: this.total,
        items: this.cartItems,
        note: this.isLocal ? this.note : null,
      },
    });
  }

  goToMenu() {
    this.router.navigate(['/lugares']);
  }

  goToEvents() {
    this.router.navigate(['/eventos']);
  }
  goToPay() {
    this.router.navigate(['/buy-check']);
  }
}
