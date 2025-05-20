import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosPageRoutingModule } from './eventos-routing.module';

import { EventosPage } from './eventos.page';
import { MidCardEventoModule } from 'src/app/shared/mid-card-evento/mid-card-evento.module';
import { SearchModule } from 'src/app/shared/search/search.module';
import { FilterModalModule } from 'src/app/shared/filter-modal/filter-modal.module';
import { ActionCardModule } from 'src/app/shared/action-card/action-card.module';

import { MediaCardEventoModule } from 'src/app/shared/media-card-evento/media-card-evento.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosPageRoutingModule,
    MidCardEventoModule,
    SearchModule,
    FilterModalModule,
    ActionCardModule,
    MediaCardEventoModule
  
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [EventosPage]
})
export class EventosPageModule {}
