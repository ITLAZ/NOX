import { Component, OnInit } from '@angular/core';
import {register} from 'swiper/element/bundle';
  register();
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
  standalone: false,
})
export class EventosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
