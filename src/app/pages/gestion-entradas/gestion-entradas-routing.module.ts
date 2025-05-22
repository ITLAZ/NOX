import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionEntradasPage } from './gestion-entradas.page';

const routes: Routes = [
  {
    path: '',
    component: GestionEntradasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionEntradasPageRoutingModule {}
