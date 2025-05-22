import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembresiaPlanPageRoutingModule } from './membresia-plan-routing.module';

import { MembresiaPlanPage } from './membresia-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembresiaPlanPageRoutingModule
  ],
  declarations: [MembresiaPlanPage]
})
export class MembresiaPlanPageModule {}
