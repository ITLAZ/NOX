import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionarPublicidadPage } from './gestionar-publicidad.page';

const routes: Routes = [
  {
    path: '',
    component: GestionarPublicidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarPublicidadPageRoutingModule {}
