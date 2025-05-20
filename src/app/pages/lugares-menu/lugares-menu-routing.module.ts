import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugaresMenuPage } from './lugares-menu.page';

const routes: Routes = [
  {
    path: '',
    component: LugaresMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugaresMenuPageRoutingModule {}
