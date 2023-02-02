import { HomeRouter } from './home.router';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';



@NgModule({
  imports: [HomeRouter],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
