import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayQRPage } from './pay-qr.page';

const routes: Routes = [
  {
    path: '',
    component: PayQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayQRPageRoutingModule {}
