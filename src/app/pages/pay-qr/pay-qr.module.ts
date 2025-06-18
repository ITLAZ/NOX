import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayQRPageRoutingModule } from './pay-qr-routing.module';

import { PayQRPage } from './pay-qr.page';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayQRPageRoutingModule,
    ToolbarModule
  ],
  declarations: [PayQRPage]
})
export class PayQRPageModule {}
