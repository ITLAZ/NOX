import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrTicketPage } from './qr-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: QrTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrTicketPageRoutingModule {}
