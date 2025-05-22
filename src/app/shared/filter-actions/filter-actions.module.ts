import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FilterActionsComponent } from 'src/app/components/filter-actions/filter-actions.component';

@NgModule({
  declarations: [FilterActionsComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [FilterActionsComponent],
})
export class FilterActionsModule { }
