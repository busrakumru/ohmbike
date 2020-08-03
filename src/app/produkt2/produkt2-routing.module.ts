import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Produkt2Page } from './produkt2.page';

const routes: Routes = [
  {
    path: '',
    component: Produkt2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Produkt2PageRoutingModule {}
