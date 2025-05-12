import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FilterModalComponent } from '../../components/filter-modal/filter-modal.component';



@NgModule({
  declarations: [FilterModalComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class FilterModalModule { }
