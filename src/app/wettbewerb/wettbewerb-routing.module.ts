import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WettbewerbPage } from './wettbewerb.page';

const routes: Routes = [
  {
    path: '',
    component: WettbewerbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WettbewerbPageRoutingModule {}
