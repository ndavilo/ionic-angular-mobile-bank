import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechargeCablePageRoutingModule } from './recharge-cable-routing.module';

import { RechargeCablePage } from './recharge-cable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechargeCablePageRoutingModule
  ],
  declarations: [RechargeCablePage]
})
export class RechargeCablePageModule {}
