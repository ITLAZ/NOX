import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'media-card-evento',
  templateUrl: './media-card-evento.component.html',
  styleUrls: ['./media-card-evento.component.scss'],
  standalone: false
})
export class MediaCardEventoComponent  implements OnInit {
@Input() imagen: string = ''; // Variable para recibir la imagen
  @Input() nombreLocal: string = ''; // Variable para el nombre del local
  @Input() fecha: string = ''; // Variable para la distancia
  @Input() horario: string = ''; // Variable para la distancia
  @Input() tipo: string = ''; // Variable para la distancia
  @Input() etiquetas: string[] = []; // Variable para las etiquetas
  @Input() direccion: string = ''; // Variable para la dirección
  constructor() { }

  ngOnInit() {}

}
