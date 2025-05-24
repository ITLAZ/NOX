import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionEntradasPageRoutingModule } from './gestion-entradas-routing.module';

import { GestionEntradasPage } from './gestion-entradas.page';

import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';

import { ItemEntradasModule } from 'src/app/shared/item-entradas/item-entradas.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionEntradasPageRoutingModule,
    ToolbarModule,
    ItemEntradasModule
  ],
  declarations: [GestionEntradasPage]
})
export class GestionEntradasPageModule {}
