import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextgroessePage } from './textgroesse.page';

const routes: Routes = [
  {
    path: '',
    component: TextgroessePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextgroessePageRoutingModule {}
