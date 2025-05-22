import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mid-card',
  templateUrl: './mid-card.component.html',
  styleUrls: ['./mid-card.component.scss'],
  standalone: false
})
export class MidCardComponent implements OnInit {
  @Input() imagen: string = ''; // Variable para recibir la imagen
  @Input() nombreLocal: string = ''; // Variable para el nombre del local
  @Input() distancia: string = ''; // Variable para la distancia

  constructor() {}

  ngOnInit() {}
}
