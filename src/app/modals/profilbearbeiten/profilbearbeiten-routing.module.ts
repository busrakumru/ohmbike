import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilbearbeitenPage } from './profilbearbeiten.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilbearbeitenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilbearbeitenPageRoutingModule {}
