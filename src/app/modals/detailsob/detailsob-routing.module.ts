import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsobPage } from './detailsob.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsobPageRoutingModule {}
