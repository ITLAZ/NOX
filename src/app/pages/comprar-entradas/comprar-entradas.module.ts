
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprarEntradasPageRoutingModule } from './comprar-entradas-routing.module';

import { ComprarEntradasPage } from './comprar-entradas.page';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';
import { ItemEntradasModule } from 'src/app/shared/item-entradas/item-entradas.module';
import { ItemComprasModule } from "../../shared/item-compras/item-compras.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprarEntradasPageRoutingModule,
    ToolbarModule,
    ItemEntradasModule,
    ItemComprasModule
],
  declarations: [ComprarEntradasPage]
})
export class ComprarEntradasPageModule {}


