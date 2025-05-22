import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
  standalone: false
})
export class MiniCardComponent implements OnInit {
  @Input() imagenMini: string = ''; // Variable para la URL de la imagen
  @Input() tituloLocal: string = ''; // Variable para el título del local

  constructor() { }

  ngOnInit() {}
}