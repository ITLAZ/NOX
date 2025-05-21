import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-notificaciones',
  templateUrl: './item-notificaciones.component.html',
  styleUrls: ['./item-notificaciones.component.scss'],
  standalone: false
})
export class ItemNotificacionesComponent implements OnInit {
  @Input() imagen: string = 'https://ionicframework.com/docs/img/demos/card-media.png';
  @Input() titulo: string = 'Evento por acabar';
  @Input() subtitulo: string = 'Morat concierto';

  constructor() {}

  ngOnInit() {}
}