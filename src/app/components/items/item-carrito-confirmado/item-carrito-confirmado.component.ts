import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-carrito-confirmado',
  templateUrl: './item-carrito-confirmado.component.html',
  styleUrls: ['./item-carrito-confirmado.component.scss'],
  standalone: false,
})
export class ItemCarritoConfirmadoComponent  implements OnInit {
  quantity = 0;

  // Variables solicitadas con @Input()
  @Input() image: string = '';
  @Input() nombreComida: string = '';
  @Input() descripcion: string = '';
  @Input() precio: string = '';

  constructor() { }

  ngOnInit() {}

}
