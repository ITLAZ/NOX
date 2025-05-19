import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'info-row',
  templateUrl: './info-row.component.html',
  styleUrls: ['./info-row.component.scss'],
  standalone: false
})
export class InfoRowComponent {

  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() editable: boolean = false;
  @Input() type: 'text' | 'select' = 'text';
}
