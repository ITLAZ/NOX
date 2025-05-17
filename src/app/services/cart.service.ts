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
    const itemId = item.id || item.name || item.tipo; // Ajustable según estructura
    const existingIndex = this.cart.findIndex(i => (i.id || i.name || i.tipo) === itemId);

    if (existingIndex >= 0) {
      // Si ya existe, aumenta la cantidad
      this.cart[existingIndex].quantity += item.quantity || 1;
    } else {
      // Si no existe, agregar con cantidad
      this.cart.push({ ...item, quantity: item.quantity || 1 });
    }

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
      return sum + (price * (item.quantity || 1));
    }, 0);
  }
  updateCart(cart: any[]) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
}
