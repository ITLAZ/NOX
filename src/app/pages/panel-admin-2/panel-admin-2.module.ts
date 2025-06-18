import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanelAdmin2PageRoutingModule } from './panel-admin-2-routing.module';

import { PanelAdmin2Page } from './panel-admin-2.page';
import { InfoRowModule } from 'src/app/shared/info-row/info-row.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelAdmin2PageRoutingModule,
    InfoRowModule,
    ReactiveFormsModule,
    ToolbarModule
  ],
  declarations: [PanelAdmin2Page]
})
export class PanelAdmin2PageModule {}
