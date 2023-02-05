import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordPageRoutingModule } from './password-routing.module';

import { PasswordPage } from './password.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [PasswordPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PasswordPageRoutingModule,
        ComponentsModule
    ]
})
export class PasswordPageModule {}
