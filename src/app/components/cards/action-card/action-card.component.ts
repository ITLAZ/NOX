import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss'],
  standalone: false,
})
export class ActionCardComponent implements OnInit {
  @Input() nombreOferta: string = ''; // Variable para el nombre de la oferta
  @Input() textoOferta: string = ''; // Variable para el texto de la oferta
  @Input() imagenOferta: string = ''; // Variable para la URL de la imagen de la oferta

  constructor() { }

  ngOnInit() {}
}
