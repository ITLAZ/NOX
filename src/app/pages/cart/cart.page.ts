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
  note: string = '';  // Para el menú

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCart();
    this.total = this.cartItems.reduce((sum, i) => (i.price || i.precio || 0) * (i.quantity || 1) + sum, 0);
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
      // Si ya es 1 y se quiere decrementar, mejor eliminarlo
      const index = this.cartItems.findIndex(i => i.id === item.id);
      if (index > -1) this.removeItem(index);
    }
  }

  goToMenu() {
    this.router.navigate(['/lugares-test']); // Ajusta a tu ruta real
  }

  goToTickets() {
    this.router.navigate(['/ticket-test']); // Ajusta a tu ruta real
  }
  goToBuyCheck() {
  this.router.navigate(['/buy-check'], {
    state: {
      total: this.total,
      items: this.cartItems
    }
  });
}

}
