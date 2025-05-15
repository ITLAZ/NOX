import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugaresTestPage } from './lugares-test.page';

const routes: Routes = [
  {
    path: '',
    component: LugaresTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugaresTestPageRoutingModule {}
