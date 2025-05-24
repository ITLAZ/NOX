import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FilterActionsComponent } from 'src/app/components/filter-actions/filter-actions.component';
import { MiniCardModule } from '../mini-card/mini-card.module';

@NgModule({
  declarations: [FilterActionsComponent],
  imports: [
    CommonModule,
    IonicModule,
    MiniCardModule
  ],
  exports: [FilterActionsComponent],
})
export class FilterActionsModule { }
