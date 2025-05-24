import { Component,Input,  OnInit } from '@angular/core';

@Component({
  selector: 'item-entradas',
  templateUrl: './item-entradas.component.html',
  styleUrls: ['./item-entradas.component.scss'],
  standalone: false
})
export class ItemEntradasComponent  implements OnInit {
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
