import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss'],
  standalone: false,
})
export class ComentarioComponent {
  rating = 0;

  constructor(private modalCtrl: ModalController) {}

  setRating(value: number) {
    this.rating = value;
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

  submit() {
    this.modalCtrl.dismiss({ rating: this.rating });
  }
}