import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-compras',
  templateUrl: './item-compras.component.html',
  styleUrls: ['./item-compras.component.scss'],
  standalone: false,
})
export class ItemComprasComponent implements OnInit {
  @Input() image: string = ''; // URL de la imagen
  @Input() nombreComida: string = ''; // Nombre de la entrada
  @Input() descripcion: string = ''; // Descripción de la entrada
  @Input() precio: string = ''; // Precio de la entrada
  @Input() quantity: number = 0; // Cantidad inicial

  @Output() quantityChange = new EventEmitter<number>(); // Emitir cambios de cantidad

  constructor() {}

  ngOnInit() {}

  increase() {
    this.quantity++;
    this.quantityChange.emit(this.quantity); // Emitir nueva cantidad
  }

  decrease() {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity); // Emitir nueva cantidad
    }
  }

  delete() {
    this.quantity = 0;
    this.quantityChange.emit(this.quantity); // Emitir nueva cantidad
  }
}
