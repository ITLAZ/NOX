import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacionesPageRoutingModule } from './notificaciones-routing.module';

import { NotificacionesPage } from './notificaciones.page';

import { ItemNotificacionesModule } from 'src/app/shared/item-notificaciones/item-notificaciones.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionesPageRoutingModule,
    ItemNotificacionesModule
  ],
  declarations: [NotificacionesPage]
})
export class NotificacionesPageModule {}
