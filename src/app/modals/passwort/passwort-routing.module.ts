import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswortPage } from './passwort.page';

const routes: Routes = [
  {
    path: '',
    component: PasswortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswortPageRoutingModule {}
