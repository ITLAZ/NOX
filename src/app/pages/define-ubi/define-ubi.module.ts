import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { DefineUbiPageRoutingModule } from './define-ubi-routing.module';

import { DefineUbiPage } from './define-ubi.page';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefineUbiPageRoutingModule,
    ToolbarModule
  ],
  declarations: [DefineUbiPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DefineUbiPageModule {}
