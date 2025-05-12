import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsTestPage } from './components-test.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentsTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsTestPageRoutingModule {}
