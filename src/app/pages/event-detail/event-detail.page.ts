import { Component, OnInit } from '@angular/core';
import {register} from 'swiper/element/bundle';
  register();
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
  standalone: false
})
export class EventDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
