import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionarPublicidadPageRoutingModule } from './gestionar-publicidad-routing.module';

import { GestionarPublicidadPage } from './gestionar-publicidad.page';

import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionarPublicidadPageRoutingModule,
    ToolbarModule
  ],
  declarations: [GestionarPublicidadPage]
})
export class GestionarPublicidadPageModule {}
