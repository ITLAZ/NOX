import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLocalPageRoutingModule } from './new-local-routing.module';

import { NewLocalPage } from './new-local.page';
import { InfoRowModule } from 'src/app/shared/info-row/info-row.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewLocalPageRoutingModule,
    InfoRowModule
  ],
  declarations: [NewLocalPage]
})
export class NewLocalPageModule {}
