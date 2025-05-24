import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarMenuPage } from './editar-menu.page';

const routes: Routes = [
  {
    path: '',
    component: EditarMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarMenuPageRoutingModule {}
