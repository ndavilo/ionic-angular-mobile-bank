import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyPowerPage } from './buy-power.page';

const routes: Routes = [
  {
    path: '',
    component: BuyPowerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyPowerPageRoutingModule {}
