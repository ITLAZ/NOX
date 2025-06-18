import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListEventsPageRoutingModule } from './list-events-routing.module';

import { ListEventsPage } from './list-events.page';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListEventsPageRoutingModule,
    ToolbarModule
  ],
  declarations: [ListEventsPage]
})
export class ListEventsPageModule {}
