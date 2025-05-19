import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugaresCardPage } from './lugares-card.page';

const routes: Routes = [
  {
    path: '',
    component: LugaresCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugaresCardPageRoutingModule {}
