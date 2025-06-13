import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListLocalesPage } from './list-locales.page';

const routes: Routes = [
  {
    path: '',
    component: ListLocalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListLocalesPageRoutingModule {}
