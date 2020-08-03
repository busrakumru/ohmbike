import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilvonanderenPage } from './profilvonanderen.page';
//import { TabsPage } from '../tabs/tabs.page';
//import { TabsPageRoutingModule } from '../tabs/tabs-routing.module';

const routes: Routes = [
  {
    path: '',
    component: ProfilvonanderenPage
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilvonanderenPageRoutingModule {}
