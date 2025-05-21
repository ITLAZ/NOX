import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mid-card',
  templateUrl: './mid-card.component.html',
  styleUrls: ['./mid-card.component.scss'],
  standalone: false
})
export class MidCardComponent implements OnInit {
  @Input() imagen: string = ''; // Variable para recibir la imagen

  constructor() {}

  ngOnInit() {}
}