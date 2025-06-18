import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugaresMenuPageRoutingModule } from './lugares-menu-routing.module';

import { LugaresMenuPage } from './lugares-menu.page';

import { ItemComprasModule } from 'src/app/shared/item-compras/item-compras.module';
import { TipoFiltroPipe } from 'src/app/pipes/tipo-filtro.pipe';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugaresMenuPageRoutingModule,
    ItemComprasModule,
    TipoFiltroPipe,
    ToolbarModule
  ],
  declarations: [LugaresMenuPage]
})
export class LugaresMenuPageModule {}
