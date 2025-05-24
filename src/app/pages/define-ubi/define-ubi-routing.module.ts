import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefineUbiPage } from './define-ubi.page';

const routes: Routes = [
  {
    path: '',
    component: DefineUbiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefineUbiPageRoutingModule {}
