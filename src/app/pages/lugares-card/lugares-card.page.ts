import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComentarioComponent } from '../../components/comentario/comentario.component';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-lugares-card',
  templateUrl: './lugares-card.page.html',
  styleUrls: ['./lugares-card.page.scss'],
  standalone: false,
})
export class LugaresCardPage implements OnInit {

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ComentarioComponent,
      breakpoints: [0, 0.4],
      initialBreakpoint: 0.4,
      handle: true,
      cssClass: 'custom-modal'
    });

    await modal.present();
  }
}
