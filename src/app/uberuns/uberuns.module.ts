import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UberunsPageRoutingModule } from './uberuns-routing.module';

import { UberunsPage } from './uberuns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UberunsPageRoutingModule
  ],
  declarations: [UberunsPage]
})
export class UberunsPageModule {}
