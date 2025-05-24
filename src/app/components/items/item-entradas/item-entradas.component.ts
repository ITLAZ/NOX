import { Component,Input,  OnInit } from '@angular/core';

@Component({
  selector: 'item-entradas',
  templateUrl: './item-entradas.component.html',
  styleUrls: ['./item-entradas.component.scss'],
  standalone: false
})
export class ItemEntradasComponent  implements OnInit {
  quantity = 0;

  @Input() image: string = ''; // URL de la imagen
  @Input() producto: string = ''; // Nombre de la entrada
  @Input() descripcion: string = ''; // Descripción de la entrada
  @Input() precio: number = 0; // Precio de la entrada
  @Input() cantidad: number = 0; // Cantidad disponible

  constructor() {}

  ngOnInit() {}

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity === 1) {
      this.quantity = 0;
    } else if (this.quantity > 1) {
      this.quantity--;
    }
  }

  delete() {
    this.quantity = 0;
  }
}
