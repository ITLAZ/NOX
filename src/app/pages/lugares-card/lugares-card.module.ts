import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugaresCardPageRoutingModule } from './lugares-card-routing.module';

import { LugaresCardPage } from './lugares-card.page';

import { MenuCardModule } from 'src/app/shared/menu-card/menu-card.module';
import { ComentarioComponent } from 'src/app/components/comentario/comentario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugaresCardPageRoutingModule,
    MenuCardModule,
    MenuCardModule,
  ],
  declarations: [LugaresCardPage, ComentarioComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agregado para permitir elementos personalizados
})
export class LugaresCardPageModule {}