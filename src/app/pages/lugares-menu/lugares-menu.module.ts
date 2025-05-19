import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugaresMenuPageRoutingModule } from './lugares-menu-routing.module';

import { LugaresMenuPage } from './lugares-menu.page';

import { ItemComprasModule } from 'src/app/shared/item-compras/item-compras.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugaresMenuPageRoutingModule,
    ItemComprasModule
  ],
  declarations: [LugaresMenuPage]
})
export class LugaresMenuPageModule {}
