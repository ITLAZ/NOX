import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MidCardEventoComponent } from 'src/app/components/cards/mid-card-evento/mid-card-evento.component';


@NgModule({
  declarations: [
    MidCardEventoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    MidCardEventoComponent
  ]
})
export class MidCardEventoModule { }
