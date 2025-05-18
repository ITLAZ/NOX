import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ItemComprasComponent } from '../../components/items/item-compras/item-compras.component';



@NgModule({
  declarations: [ItemComprasComponent],

  imports: [
    CommonModule,
    IonicModule,
  ],

  exports: [ItemComprasComponent]
})
export class ItemComprasModule { }
