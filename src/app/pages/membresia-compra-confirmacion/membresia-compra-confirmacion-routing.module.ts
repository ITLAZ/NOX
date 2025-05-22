import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembresiaCompraConfirmacionPage } from './membresia-compra-confirmacion.page';

const routes: Routes = [
  {
    path: '',
    component: MembresiaCompraConfirmacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembresiaCompraConfirmacionPageRoutingModule {}
