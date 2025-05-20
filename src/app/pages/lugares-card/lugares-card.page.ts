import { Component, OnInit } from '@angular/core';
import {register} from 'swiper/element/bundle';
  register();
  
@Component({
  selector: 'app-lugares-card',
  templateUrl: './lugares-card.page.html',
  styleUrls: ['./lugares-card.page.scss'],
  standalone: false,
})
export class LugaresCardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
