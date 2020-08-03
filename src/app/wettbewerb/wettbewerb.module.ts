import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WettbewerbPageRoutingModule } from './wettbewerb-routing.module';

import { WettbewerbPage } from './wettbewerb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WettbewerbPageRoutingModule
  ],
  declarations: [WettbewerbPage]
})
export class WettbewerbPageModule {}
