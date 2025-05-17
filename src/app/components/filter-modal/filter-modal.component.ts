import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  standalone: false,
})
export class FilterModalComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  selectedTab: string = 'tab1';
  currentBreakpoint: number = 0.25; // Valor inicial
  @Input() search: any;
  constructor() { }

  ngOnInit() {}

  onSegmentChange(event: any) {
    this.selectedTab = event.detail.value;
  }

  // Método para actualizar el breakpoint actual
  updateCurrentBreakpoint(breakpoint: number) {
    this.currentBreakpoint = breakpoint;
  }
}