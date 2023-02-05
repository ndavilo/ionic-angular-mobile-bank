import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyPowerPageRoutingModule } from './buy-power-routing.module';

import { BuyPowerPage } from './buy-power.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyPowerPageRoutingModule
  ],
  declarations: [BuyPowerPage]
})
export class BuyPowerPageModule {}
