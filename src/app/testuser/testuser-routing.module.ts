import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestuserPage } from './testuser.page';
//import { TabsPage } from '../tabs/tabs.page';
//import { TabsPageRoutingModule } from '../tabs/tabs-routing.module';

const routes: Routes = [
  {
    path: '',
    component: TestuserPage
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestuserPageRoutingModule {}
