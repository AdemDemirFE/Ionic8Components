import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreadcrumbsPageRoutingModule } from './breadcrumbs-routing.module';

import { BreadcrumbsPage } from './breadcrumbs.page';
import { HeaderComponentModule } from 'src/app/shared/header/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreadcrumbsPageRoutingModule,
    HeaderComponentModule
  ],
  declarations: [BreadcrumbsPage]
})
export class BreadcrumbsPageModule {}
