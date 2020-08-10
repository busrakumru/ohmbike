import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImprintPageRoutingModule } from './imprint-routing.module';

import { ImprintPage } from './imprint.page';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImprintPageRoutingModule,
    TranslateModule
  ],
  declarations: [ImprintPage]
})
export class ImprintPageModule {}
