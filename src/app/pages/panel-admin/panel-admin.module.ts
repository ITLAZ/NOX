import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanelAdminPageRoutingModule } from './panel-admin-routing.module';

import { PanelAdminPage } from './panel-admin.page';

import { InfoRowModule } from 'src/app/shared/info-row/info-row.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelAdminPageRoutingModule,
    InfoRowModule,
    ReactiveFormsModule,
    ToolbarModule
  ],
  declarations: [PanelAdminPage]
})
export class PanelAdminPageModule {}
