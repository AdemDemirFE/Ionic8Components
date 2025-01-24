import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonPageRoutingModule } from './button-routing.module';

import { ButtonPage } from './button.page';
import { HeaderComponentModule } from 'src/app/shared/header/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonPageRoutingModule,
    HeaderComponentModule
  ],
  declarations: [ButtonPage]
})
export class ButtonPageModule {}
