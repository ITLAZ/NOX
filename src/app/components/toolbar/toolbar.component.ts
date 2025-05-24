import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterModalComponent } from '../filter-modal/filter-modal.component'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: false,
})
export class ToolbarComponent implements OnInit {
  @Input() pageTitle: string = 'Page Title';
  @Input() showNotifications: boolean = true;
  @Input() showSearch: boolean = true;
  @Input() showCart: boolean = true;
  @Input() showBack: boolean = false;
  @Input() showClear: boolean = false;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  navigateBack() {
    window.history.back();
  }

  async openSearchModal() {
    const modal = await this.modalController.create({
      component: FilterModalComponent,
      breakpoints: [0, 0.25, 0.5, 0.85],
      initialBreakpoint: 0.25,
    });

    await modal.present();
  }
}
