import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: false,
})
export class BannerComponent  implements OnInit {
  @Input () localbanner: string = ''; 
  @Input () imagenbanner: string = '';
  @Input () frasebanner: string = '';

  constructor() { }

  ngOnInit() {}

}
