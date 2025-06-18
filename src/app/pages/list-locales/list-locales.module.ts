import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListLocalesPageRoutingModule } from './list-locales-routing.module';

import { ListLocalesPage } from './list-locales.page';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListLocalesPageRoutingModule,
    ToolbarModule
  ],
  declarations: [ListLocalesPage]
})
export class ListLocalesPageModule {}
