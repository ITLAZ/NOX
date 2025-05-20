import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelAdmin2Page } from './panel-admin-2.page';

const routes: Routes = [
  {
    path: '',
    component: PanelAdmin2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelAdmin2PageRoutingModule {}
