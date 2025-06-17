import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoFechaPageRoutingModule } from './evento-fecha-routing.module';

import { EventoFechaPage } from './evento-fecha.page';
import { DateEventModule } from 'src/app/shared/date-event/date-event.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoFechaPageRoutingModule,
    DateEventModule,
    ToolbarModule 
  ],
  declarations: [EventoFechaPage]
})
export class EventoFechaPageModule {}
