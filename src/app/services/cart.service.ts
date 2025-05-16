import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: any[] = [];

  constructor() {
    this.loadCart();
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private loadCart() {
    const data = localStorage.getItem('cart');
    this.cart = data ? JSON.parse(data) : [];
  }

  getCart(): any[] {
    return [...this.cart]; // copia para evitar modificaciones directas
  }

  addToCart(item: any) {
    this.cart.push(item);
    this.saveCart();
  }

  removeItem(index: number) {
    if (index >= 0 && index < this.cart.length) {
      this.cart.splice(index, 1);
      this.saveCart();
    }
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  getTotal(): number {
  return this.cart.reduce((sum, item) => {
    const price = item.price || item.precio || 0;
    return sum + price;
  }, 0);
}
}