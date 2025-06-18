import {CUSTOM_ELEMENTS_SCHEMA, NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecompensasPageRoutingModule } from './recompensas-routing.module';

import { RecompensasPage } from './recompensas.page';

import { CuponCardModule } from 'src/app/shared/cupon-card/cupon-card.module'; 

import { InfoRowModule } from 'src/app/shared/info-row/info-row.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecompensasPageRoutingModule,
    CuponCardModule,
    InfoRowModule,
    ToolbarModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [RecompensasPage],

})
export class RecompensasPageModule {}
