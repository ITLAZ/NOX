import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  standalone: false, // Asegúrate de que este componente no sea standalone si lo usas en un módulo
})
export class FilterModalComponent {
  selectedTab: string = 'tab1';
  currentBreakpoint: number = 0.25;

  constructor(private modalController: ModalController) {}

  updateCurrentBreakpoint(breakpoint: number) {
    this.currentBreakpoint = breakpoint;
  }

  onSegmentChange(event: any) {
    this.selectedTab = event.detail.value;
  }

  async expandModal() {
    const modal = await this.modalController.getTop();
    if (modal) {
      modal.setCurrentBreakpoint(0.8);
    }
  }
}
