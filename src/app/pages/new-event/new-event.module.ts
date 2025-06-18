import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewEventPageRoutingModule } from './new-event-routing.module';

import { NewEventPage } from './new-event.page';
import { InfoRowModule } from 'src/app/shared/info-row/info-row.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewEventPageRoutingModule,
    InfoRowModule,
    ReactiveFormsModule,
    ToolbarModule
  ],
  declarations: [NewEventPage]
})
export class NewEventPageModule {}
