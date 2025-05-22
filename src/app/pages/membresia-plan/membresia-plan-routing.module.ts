import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembresiaPlanPage } from './membresia-plan.page';

const routes: Routes = [
  {
    path: '',
    component: MembresiaPlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembresiaPlanPageRoutingModule {}
