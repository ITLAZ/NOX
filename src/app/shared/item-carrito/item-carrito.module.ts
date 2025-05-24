import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ItemCarritoComponent } from '../../components/items/item-carrito/item-carrito.component';



@NgModule({
  declarations: [ItemCarritoComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
exports: [ItemCarritoComponent]

})
export class ItemCarritoModule { }
