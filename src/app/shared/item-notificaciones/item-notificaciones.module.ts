import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ItemNotificacionesComponent } from '../../components/items/item-notificaciones/item-notificaciones.component';

@NgModule({
  declarations: [ItemNotificacionesComponent],
  
  imports: [
    CommonModule,
    IonicModule,
  ],

  exports: [ItemNotificacionesComponent]
})
export class ItemNotificacionesModule {}
