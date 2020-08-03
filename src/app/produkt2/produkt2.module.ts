import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Produkt2PageRoutingModule } from './produkt2-routing.module';

import { Produkt2Page } from './produkt2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Produkt2PageRoutingModule
  ],
  declarations: [Produkt2Page]
})
export class Produkt2PageModule {}
