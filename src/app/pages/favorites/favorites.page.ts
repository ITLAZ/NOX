import { Component, OnInit } from '@angular/core';
import {register} from 'swiper/element/bundle';
  register();
  
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: false
})
export class FavoritesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
