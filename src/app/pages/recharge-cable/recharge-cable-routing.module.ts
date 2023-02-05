import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechargeCablePage } from './recharge-cable.page';

const routes: Routes = [
  {
    path: '',
    component: RechargeCablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechargeCablePageRoutingModule {}
