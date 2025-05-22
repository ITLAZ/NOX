import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembresiaCompraConfirmacionPageRoutingModule } from './membresia-compra-confirmacion-routing.module';

import { MembresiaCompraConfirmacionPage } from './membresia-compra-confirmacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembresiaCompraConfirmacionPageRoutingModule
  ],
  declarations: [MembresiaCompraConfirmacionPage]
})
export class MembresiaCompraConfirmacionPageModule {}
