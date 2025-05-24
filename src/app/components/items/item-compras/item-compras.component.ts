import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-compras',
  templateUrl: './item-compras.component.html',
  styleUrls: ['./item-compras.component.scss'],
  standalone: false,
})
export class ItemComprasComponent implements OnInit {
  quantity = 0;

  @Input() image: string = ''; // URL de la imagen
  @Input() nombreComida: string = ''; // Nombre de la entrada
  @Input() descripcion: string = ''; // Descripción de la entrada
  @Input() precio: string = ''; // Precio de la entrada

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
