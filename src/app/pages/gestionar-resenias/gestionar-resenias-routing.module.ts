import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionarReseniasPage } from './gestionar-resenias.page';

const routes: Routes = [
  {
    path: '',
    component: GestionarReseniasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarReseniasPageRoutingModule {}
