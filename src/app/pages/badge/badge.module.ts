import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgePageRoutingModule } from './badge-routing.module';

import { BadgePage } from './badge.page';
import { HeaderComponentModule } from 'src/app/shared/header/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgePageRoutingModule,
    HeaderComponentModule
  ],
  declarations: [BadgePage]
})
export class BadgePageModule {}
