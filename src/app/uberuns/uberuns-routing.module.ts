import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UberunsPage } from './uberuns.page';

const routes: Routes = [
  {
    path: '',
    component: UberunsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UberunsPageRoutingModule {}
