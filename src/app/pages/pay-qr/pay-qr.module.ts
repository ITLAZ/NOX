import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayQRPageRoutingModule } from './pay-qr-routing.module';

import { PayQRPage } from './pay-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayQRPageRoutingModule
  ],
  declarations: [PayQRPage]
})
export class PayQRPageModule {}
