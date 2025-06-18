import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'date-event',
  templateUrl: './date-event.component.html',
  styleUrls: ['./date-event.component.scss'],
  standalone: false,
})
export class DateEventComponent  implements OnInit {
  @Input () nombreEvento: string = 'nombre del evento';
  @Input () fechaInicio: Date | string = '01/01/2023';
  @Input () fechaFinal: Date | string = '01/01/2023';
  @Input () lugar: string = 'tu corazón';
  @Input () precio: string = 'tu alma';
  @Input () imagen: string = 'src/assets/images/placeholder.png';
  @Input () id: string = '';
  @Output() irEvento = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

  onIrEvento() {
    this.irEvento.emit();
  }
}
