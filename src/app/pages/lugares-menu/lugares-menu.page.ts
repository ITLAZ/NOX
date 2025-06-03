import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { CartService } from 'src/app/services/cart.service';
import { AlertController } from '@ionic/angular';

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
    private cartService: CartService,
    private alertCtrl: AlertController
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

async agregarAlCarrito() {
  const productosSeleccionados = this.menu.filter(item => item.quantity > 0);

  if (productosSeleccionados.length === 0) {
    const alert = await this.alertCtrl.create({
      header: 'Sin productos',
      message: 'Selecciona al menos un producto antes de continuar.',
      buttons: ['OK']
    });
    return alert.present();
  }

  // Reemplaza el contenido completo del carrito
  this.cartService.clearCart();

  productosSeleccionados.forEach(item => {
    this.cartService.addToCart({ ...item, lugarId: this.lugarId });
  });

  const alert = await this.alertCtrl.create({
    header: 'Carrito actualizado',
    message: 'Los productos seleccionados fueron añadidos al carrito.',
    buttons: ['OK']
  });

  await alert.present();
}
}
