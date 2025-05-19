import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { InfoRowComponent } from 'src/app/components/info-row/info-row.component';


@NgModule({
  declarations: [InfoRowComponent], 
  imports: [
    CommonModule,
    IonicModule

  ],
  exports: [
    InfoRowComponent
  ]
})
export class InfoRowModule { }
