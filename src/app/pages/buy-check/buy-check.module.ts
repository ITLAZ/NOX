import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyCheckPageRoutingModule } from './buy-check-routing.module';

import { BuyCheckPage } from './buy-check.page';

import { ItemCarritoModule } from 'src/app/shared/item-carrito/item-carrito.module';
import { ItemCarritoConfirmadoModule } from 'src/app/shared/item-carrito-confirmado/item-carrito-confirmado.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyCheckPageRoutingModule,
    ItemCarritoModule,
    ItemCarritoConfirmadoModule
  ],
  declarations: [BuyCheckPage]
})
export class BuyCheckPageModule {}
