import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventoFechaPage } from './evento-fecha.page';

const routes: Routes = [
  {
    path: '',
    component: EventoFechaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventoFechaPageRoutingModule {}
