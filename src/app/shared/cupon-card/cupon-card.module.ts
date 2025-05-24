import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CuponCardComponent } from '../../components/cards/cupon-card/cupon-card.component';



@NgModule({
  declarations: [CuponCardComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    CuponCardComponent
  ]
})
export class CuponCardModule { }
