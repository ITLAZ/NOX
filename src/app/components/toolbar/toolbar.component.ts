import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: false,
})
export class ToolbarComponent  implements OnInit {

  @Input() pageTitle: string = 'Eventos'; // Valor por defecto
  @Input() showNotifications: boolean = true;
  @Input() showSearch: boolean = true;
  @Input() showCart: boolean = true;
  @Input() showBack: boolean = false;
  @Input() showClear: boolean = false;

  navigateBack() {
    window.history.back();
  }

  constructor() { }

  ngOnInit() {}

}
