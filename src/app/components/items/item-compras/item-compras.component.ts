import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-compras',
  templateUrl: './item-compras.component.html',
  styleUrls: ['./item-compras.component.scss'],
  standalone: false,
})
export class ItemComprasComponent implements OnInit {
  quantity = 0;

  constructor() { }

  ngOnInit() { }

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
