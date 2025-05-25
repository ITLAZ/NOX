import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { ItemCarritoModule } from 'src/app/shared/item-carrito/item-carrito.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module'; // Uncomment if you need a toolbar

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    ItemCarritoModule,
    ToolbarModule
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
