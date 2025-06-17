import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'boton-circle',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss'],
  standalone: false,
})
export class BotonComponent  implements OnInit {
@Input() calendar: boolean = false;
@Input() iconName: string = 'calendar-outline';//grid-outline
  constructor() { }

  ngOnInit() {}

}
