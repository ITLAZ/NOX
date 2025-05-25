import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterModalComponent } from '../filter-modal/filter-modal.component'; // Asegúrate de que esta ruta sea correcta
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private modalController: ModalController,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  navigateBack() {
    // Si hay historial, vuelve atrás. Si no, navega a home.
    if (window.history.length > 1) {
      window.history.back();
    } else {
      this.router.navigate(['/home']);
    }
  }

  async openSearchModal() {
    // Detectar la ruta actual
    let initialTab = 'tab1';
    if (this.router.url.includes('/eventos')) {
      initialTab = 'tab2';
    } else if (this.router.url.includes('/lugares')) {
      initialTab = 'tab1';
    }
    const modal = await this.modalController.create({
      component: FilterModalComponent,
      componentProps: { initialTab },
      breakpoints: [0, 0.25, 0.5, 0.95],
      initialBreakpoint: 0.95,
      cssClass: 'filter-modal',
      handle: true,
    });

    await modal.present();
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
