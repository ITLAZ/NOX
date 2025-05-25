import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTicketsPageRoutingModule } from './my-tickets-routing.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';

import { MyTicketsPage } from './my-tickets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTicketsPageRoutingModule,
    ToolbarModule
  ],
  declarations: [MyTicketsPage]
})
export class MyTicketsPageModule {}
