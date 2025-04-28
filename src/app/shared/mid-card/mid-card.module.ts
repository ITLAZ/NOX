import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { MidCardComponent } from '../../components/cards/mid-card/mid-card.component';


@NgModule({
  declarations: [
    MidCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class MidCardModule { }
