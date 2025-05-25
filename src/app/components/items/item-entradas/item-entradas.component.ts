import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'item-entradas',
  templateUrl: './item-entradas.component.html',
  styleUrls: ['./item-entradas.component.scss'],
  standalone: false
})
export class ItemEntradasComponent implements OnInit {
  @Input() image: string = ''; // URL de la imagen
  @Input() producto: string = ''; // Nombre de la entrada
  @Input() descripcion: string = ''; // Descripción de la entrada
  @Input() precio: number = 0; // Precio de la entrada
  @Input() cantidad: number = 0; // Cantidad disponible
  @Input() quantity: number = 0; // Cantidad seleccionada

  @Output() quantityChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  increase() {
    if (this.quantity < this.cantidad) { // Verificar que no supere la cantidad disponible
      this.quantity++;
      this.quantityChange.emit(this.quantity); // Emitir cambio
    }
  }

  decrease() {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity); // Emitir cambio
    }
  }

  delete() {
    this.quantity = 0;
    this.quantityChange.emit(this.quantity); // Emitir cambio
  }
}
