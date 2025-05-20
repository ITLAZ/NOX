import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MediaCardEventoComponent } from 'src/app/components/cards/media-card-evento/media-card-evento.component';
@NgModule({
  declarations: [MediaCardEventoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    MediaCardEventoComponent
  ]
})
export class MediaCardEventoModule { }
