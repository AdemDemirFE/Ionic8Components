import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordionPageRoutingModule } from './accordion-routing.module';

import { AccordionPage } from './accordion.page';
import { HeaderComponentModule } from 'src/app/shared/header/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionPageRoutingModule,
    HeaderComponentModule
  ],
  declarations: [AccordionPage]
})
export class AccordionPageModule {}
