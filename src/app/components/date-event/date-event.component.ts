import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'date-event',
  templateUrl: './date-event.component.html',
  styleUrls: ['./date-event.component.scss'],
  standalone: false,
})
export class DateEventComponent  implements OnInit {
  @Input () nombreEvento: string = '';
  @Input () fechaInicio: Date | string = '';
  @Input () fechaFinal: Date | string = '';
  @Input () lugar: string = '';
  @Input () precio: string = '';
  @Input () imagen: string = '';

  constructor() { }

  ngOnInit() {}

}
