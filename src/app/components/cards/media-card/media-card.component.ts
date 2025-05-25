import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
  standalone: false,
})
export class MediaCardComponent implements OnInit {
  @Input() nombre: string = '';
  @Input() imagen: string = '';
  @Input() tipo: string = '';
  @Input() etiquetas: string[] = [];
  @Input() direccion: string = '';
  @Input() distancia: string = '';
  @Input() calificacion: number = 0;

  constructor() { }

  ngOnInit() {}
}
