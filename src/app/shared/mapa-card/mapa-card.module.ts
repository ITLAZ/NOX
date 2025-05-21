import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MapaCardComponent } from '../../components/cards/mapa-card/mapa-card.component';

@NgModule({
  declarations: [MapaCardComponent],
  imports: [
    CommonModule, 
    IonicModule
  ],
  exports: [
    MapaCardComponent]
})
export class MapaCardModule { }
