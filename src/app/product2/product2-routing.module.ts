import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Product2Page } from './product2.page';

const routes: Routes = [
  {
    path: '',
    component: Product2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Product2PageRoutingModule {}
