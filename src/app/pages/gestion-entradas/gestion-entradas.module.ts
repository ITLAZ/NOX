import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionEntradasPageRoutingModule } from './gestion-entradas-routing.module';

import { GestionEntradasPage } from './gestion-entradas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionEntradasPageRoutingModule
  ],
  declarations: [GestionEntradasPage]
})
export class GestionEntradasPageModule {}
