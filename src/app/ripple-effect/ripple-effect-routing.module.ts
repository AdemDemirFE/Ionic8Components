import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RippleEffectPage } from './ripple-effect.page';

const routes: Routes = [
  {
    path: '',
    component: RippleEffectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RippleEffectPageRoutingModule {}
