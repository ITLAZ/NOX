import { Component, Input, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  standalone: false,
})
export class FilterModalComponent {
  @ViewChild(IonModal) modal!: IonModal;
  selectedTab: string = 'tab1';
  currentBreakpoint: number = 0.25;

  @Input() search: any;

  onSegmentChange(event: any) {
    this.selectedTab = event.detail.value;
    // Forzar la detección de cambios si es necesario
    setTimeout(() => {
      this.modal?.setCurrentBreakpoint(this.currentBreakpoint);
    });
  }

  updateCurrentBreakpoint(breakpoint: number) {
    this.currentBreakpoint = breakpoint;
  }
}