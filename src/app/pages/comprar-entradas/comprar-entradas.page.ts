import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { CartService } from 'src/app/services/cart.service';

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
    private cartService: CartService
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

  confirmarCompra() {
    const entradasSeleccionadas = this.entradas.filter(entrada => entrada.quantity > 0);

    if (entradasSeleccionadas.length === 0) {
      console.log('No se han seleccionado entradas.');
      return;
    }

    console.log('Entradas seleccionadas:', entradasSeleccionadas);

    // Agregar las entradas seleccionadas al carrito con ID y nombre del evento
    entradasSeleccionadas.forEach(entrada =>
      this.cartService.addToCart({
        ...entrada,
        eventoId: this.eventoId,
        eventoNombre: this.eventoNombre
      })
    );

    console.log('Compra confirmada. Productos agregados al carrito.');
  }
}
