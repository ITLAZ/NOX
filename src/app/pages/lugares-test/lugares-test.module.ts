import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugaresTestPageRoutingModule } from './lugares-test-routing.module';

import { LugaresTestPage } from './lugares-test.page';
import { ItemCarritoModule } from "../../shared/item-carrito/item-carrito.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugaresTestPageRoutingModule,
    ItemCarritoModule
],
  declarations: [LugaresTestPage]
})
export class LugaresTestPageModule {}
