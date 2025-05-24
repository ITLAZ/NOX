import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FilterModalComponent } from '../../components/filter-modal/filter-modal.component';
import { FilterActionsModule } from '../filter-actions/filter-actions.module';
import { MediaCardEventoModule } from '../media-card-evento/media-card-evento.module';
import { MediaCardModule } from '../media-card/media-card.module';


@NgModule({
  declarations: [FilterModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    FilterActionsModule,
    MediaCardEventoModule,
    MediaCardModule
  ],
  exports: [FilterModalComponent]
})
export class FilterModalModule { 

}
