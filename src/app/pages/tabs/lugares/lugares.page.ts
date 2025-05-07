import { Component, OnInit } from '@angular/core';
import {register} from 'swiper/element/bundle';
  register();
  
@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
  standalone: false,

})
export class LugaresPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
