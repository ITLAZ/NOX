import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-lugares-menu',
  templateUrl: './lugares-menu.page.html',
  styleUrls: ['./lugares-menu.page.scss'],
  standalone: false
})
export class LugaresMenuPage implements OnInit {
  lugarId!: string;
  menu: any[] = [];
  totalProductos: number = 0;
  totalPrecio: number = 0;

  constructor(
    private route: ActivatedRoute,
    private db: DatabaseService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.lugarId = this.route.snapshot.paramMap.get('id')!;
    if (!this.lugarId) {
      console.error('El ID del lugar es nulo o no válido.');
      return;
    }

    this.db.getSubcollection('locales', this.lugarId, 'menu').subscribe({
      next: (data) => {
        this.menu = data.map(item => ({ ...item, quantity: 0 }));
      },
      error: (err) => {
        console.error('Error al cargar el menú:', err);
      },
    });
  }

  aumentarCantidad(item: any, newQuantity: number) {
    item.quantity = newQuantity;
    this.actualizarTotales();
  }

  actualizarTotales() {
    this.totalProductos = this.menu.reduce((sum, item) => sum + (item.quantity || 0), 0);
    this.totalPrecio = this.menu.reduce((sum, item) => sum + (item.quantity || 0) * item.precio, 0);
  }

  agregarAlCarrito() {
    this.menu
      .filter(item => item.quantity > 0)
      .forEach(item => this.cartService.addToCart({ ...item, lugarId: this.lugarId }));
    console.log('Productos agregados al carrito.');
  }
}
