import { Component, OnInit } from '@angular/core';
import {register} from 'swiper/element/bundle';
  register();
  
@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
  standalone: false
})
export class HistorialPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
