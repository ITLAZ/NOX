import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprarEntradasPage } from './comprar-entradas.page';

const routes: Routes = [
  {
    path: '',
    component: ComprarEntradasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprarEntradasPageRoutingModule {}
