import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { MiniCardComponent } from '../../components/cards/mini-card/mini-card.component';


@NgModule({
  declarations: [
    MiniCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    MiniCardComponent]
})
export class MiniCardModule { }
