import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RippleEffectPageRoutingModule } from './ripple-effect-routing.module';

import { RippleEffectPage } from './ripple-effect.page';
import { HeaderComponentModule } from '../shared/header/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RippleEffectPageRoutingModule,
    HeaderComponentModule
  ],
  declarations: [RippleEffectPage]
})
export class RippleEffectPageModule {}
