import { IndexRouter } from './index.router';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';


@NgModule({
  imports: [IndexRouter],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
