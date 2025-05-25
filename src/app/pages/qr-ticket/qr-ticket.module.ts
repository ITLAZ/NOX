import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrTicketPageRoutingModule } from './qr-ticket-routing.module';

import { QrTicketPage } from './qr-ticket.page';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrTicketPageRoutingModule,
    ToolbarModule
  ],
  declarations: [QrTicketPage]
})
export class QrTicketPageModule {}
