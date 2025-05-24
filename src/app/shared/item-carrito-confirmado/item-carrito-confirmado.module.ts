import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ItemCarritoConfirmadoComponent } from 'src/app/components/items/item-carrito-confirmado/item-carrito-confirmado.component';



@NgModule({
  declarations: [ ItemCarritoConfirmadoComponent],
  imports: [
      CommonModule,
      IonicModule,
    ],

  exports: [ ItemCarritoConfirmadoComponent]
})
export class ItemCarritoConfirmadoModule {  }
