import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyCheckPageRoutingModule } from './buy-check-routing.module';

import { BuyCheckPage } from './buy-check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyCheckPageRoutingModule
  ],
  declarations: [BuyCheckPage]
})
export class BuyCheckPageModule {}
