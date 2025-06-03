import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { CartService } from 'src/app/services/cart.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-comprar-entradas',
  templateUrl: './comprar-entradas.page.html',
  styleUrls: ['./comprar-entradas.page.scss'],
  standalone: false
})
export class ComprarEntradasPage implements OnInit {
  entradas: any[] = [];
  eventoId!: string;
  totalCantidad: number = 0;
  totalPrecio: number = 0;
  eventoNombre: string = ''; // Para almacenar el nombre del evento

  constructor(
    private route: ActivatedRoute,
    private db: DatabaseService,
    private cartService: CartService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    // Capturar el ID del evento desde la URL
    this.eventoId = this.route.snapshot.paramMap.get('eventoId')!;

    // Obtener el nombre del evento directamente de las entradas
    this.db.getSubcollection('eventos', this.eventoId, 'entradas').subscribe({
      next: (data) => {
        this.entradas = data.map(entrada => ({
          ...entrada,
          quantity: 0 // Inicializar la cantidad seleccionada
        }));
        if (this.entradas.length > 0) {
          this.eventoNombre = this.entradas[0].eventoNombre || 'Evento';
        }
        console.log('Entradas cargadas:', this.entradas);
      },
      error: (err) => console.error('Error al cargar entradas:', err),
    });
  }

  actualizarCantidad(entrada: any, nuevaCantidad: number) {
    entrada.quantity = nuevaCantidad;
    this.actualizarTotales();
  }

  actualizarTotales() {
    this.totalCantidad = this.entradas.reduce((suma, entrada) => suma + (entrada.quantity || 0), 0);
    this.totalPrecio = this.entradas.reduce((suma, entrada) => suma + (entrada.quantity || 0) * entrada.precio, 0);
  }

  async confirmarCompra() {
  const entradasSeleccionadas = this.entradas.filter(entrada => entrada.quantity > 0);

  if (entradasSeleccionadas.length === 0) {
    const alert = await this.alertCtrl.create({
      header: 'Sin entradas',
      message: 'Selecciona al menos una entrada antes de continuar.',
      buttons: ['OK']
    });
    return alert.present();
  }

  // Limpiar carrito y agregar nuevas entradas
  this.cartService.clearCart();

  entradasSeleccionadas.forEach(entrada =>
    this.cartService.addToCart({
      ...entrada,
      eventoId: this.eventoId,
      eventoNombre: this.eventoNombre
    })
  );

  const alert = await this.alertCtrl.create({
    header: 'Entradas añadidas',
    message: 'Las entradas seleccionadas fueron añadidas al carrito.',
    buttons: ['OK']
  });

  await alert.present();
}
}
