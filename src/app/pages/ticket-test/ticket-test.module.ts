import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketTestPageRoutingModule } from './ticket-test-routing.module';

import { TicketTestPage } from './ticket-test.page';
import { ItemCarritoModule } from 'src/app/shared/item-carrito/item-carrito.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketTestPageRoutingModule,
    ItemCarritoModule
  ],
  declarations: [TicketTestPage]
})
export class TicketTestPageModule {}
