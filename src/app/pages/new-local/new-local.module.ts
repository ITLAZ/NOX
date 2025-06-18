import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLocalPageRoutingModule } from './new-local-routing.module';

import { NewLocalPage } from './new-local.page';
import { InfoRowModule } from 'src/app/shared/info-row/info-row.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewLocalPageRoutingModule,
    InfoRowModule,
    ReactiveFormsModule,
    ToolbarModule
  ],
  declarations: [NewLocalPage]
})
export class NewLocalPageModule {}
