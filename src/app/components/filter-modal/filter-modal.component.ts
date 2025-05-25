import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  standalone: false,
})
export class FilterModalComponent {
  @Input() initialTab: string = 'tab1';
  selectedTab: string = 'tab1';
  currentBreakpoint: number = 0.95;

  lugares = Array(10).fill({});
  eventos = [
    {
      nombreLocal: 'Local 1',
      fecha: '2025-06-01',
      horario: '20:00',
      tipo: 'Concierto',
      imagen: 'https://ionicframework.com/docs/img/demos/card-media.png',
    },
    {
      nombreLocal: 'Local 2',
      fecha: '2025-06-02',
      horario: '19:00',
      tipo: 'Teatro',
      imagen: 'https://ionicframework.com/docs/img/demos/card-media.png',
    },
  ];

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.selectedTab = this.initialTab || 'tab1';
  }

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

  loadMore(event: any) {
    // lógica para scroll infinito
    if (this.selectedTab === 'tab1') {
      this.lugares.push(...Array(5).fill({}));
    } else {
      this.eventos.push(...this.eventos);
    }
    event.target.complete?.(); // si se usa ion-infinite-scroll
  }
}
