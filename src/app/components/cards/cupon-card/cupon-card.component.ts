import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cupon-card',
  templateUrl: './cupon-card.component.html',
  styleUrls: ['./cupon-card.component.scss'],
  standalone: false,
})
export class CuponCardComponent  implements OnInit {

  @Input() descuento: number = 50;
  @Input() puntos: number = 1000;
  @Input() icono: string = 'pricetag'; // Nombre del ion-icon

  constructor() { }

  ngOnInit() {}

}
