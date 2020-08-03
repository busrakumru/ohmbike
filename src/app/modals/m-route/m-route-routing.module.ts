import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MRoutePage } from './m-route.page';

const routes: Routes = [
  {
    path: '',
    component: MRoutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MRoutePageRoutingModule {}
