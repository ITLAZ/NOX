import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketTestPage } from './ticket-test.page';

const routes: Routes = [
  {
    path: '',
    component: TicketTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketTestPageRoutingModule {}
