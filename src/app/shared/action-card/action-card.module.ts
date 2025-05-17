import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ActionCardComponent } from '../../components/cards/action-card/action-card.component';



@NgModule({
  declarations: [
    ActionCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ActionCardComponent]
})
export class ActionCardModule { }
