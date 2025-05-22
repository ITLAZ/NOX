import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AniadirMenuPage } from './aniadir-menu.page';

const routes: Routes = [
  {
    path: '',
    component: AniadirMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AniadirMenuPageRoutingModule {}
