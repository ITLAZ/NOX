import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
  standalone: false
})
export class MenuCardComponent implements OnInit {
  @Input() imagenComida: string = ''; // Variable para la URL de la imagen de la comida
  @Input() nombreComida: string = ''; // Variable para el nombre de la comida
  @Input() precioComida: string = ''; // Variable para el precio de la comida

  constructor() { }

  ngOnInit() {}
}
