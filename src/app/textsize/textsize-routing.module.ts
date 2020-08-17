import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextsizePage } from './textsize.page';

const routes: Routes = [
  {
    path: '',
    component: TextsizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextsizePageRoutingModule {}
