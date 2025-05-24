import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-carrito',
  templateUrl: './item-carrito.component.html',
  styleUrls: ['./item-carrito.component.scss'],
  standalone: false,
})
export class ItemCarritoComponent  implements OnInit {
quantity = 0;

  // Variables solicitadas con @Input()
  @Input() image: string = '';
  @Input() nombreComida: string = '';
  @Input() descripcion: string = '';
  @Input() precio: string = '';

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
