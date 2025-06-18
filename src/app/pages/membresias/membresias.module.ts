import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembresiasPageRoutingModule } from './membresias-routing.module';

import { MembresiasPage } from './membresias.page';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembresiasPageRoutingModule,
    ToolbarModule
  ],
  declarations: [MembresiasPage]
})
export class MembresiasPageModule {}
