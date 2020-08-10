import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Product2PageRoutingModule } from './product2-routing.module';

import { Product2Page } from './product2.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Product2PageRoutingModule,
    TranslateModule
  ],
  declarations: [Product2Page]
})
export class Product2PageModule {}
