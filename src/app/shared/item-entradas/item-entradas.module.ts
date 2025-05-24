import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ItemEntradasComponent } from '../../components/items/item-entradas/item-entradas.component';



@NgModule({
  declarations: [ItemEntradasComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ItemEntradasComponent]
})
export class ItemEntradasModule { }
