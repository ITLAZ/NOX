import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mid-card-evento',
  templateUrl: './mid-card-evento.component.html',
  styleUrls: ['./mid-card-evento.component.scss'],
  standalone: false
})
export class MidCardEventoComponent  implements OnInit {
  @Input() imagen: string = ''; // Variable para recibir la imagen
  @Input() nombreLocal: string = ''; // Variable para el nombre del local
  @Input() distancia: string = ''; // Variable para la distancia
  @Input() tipo: string = ''; // Variable para la distancia
  constructor() { }

  ngOnInit() {}

}
