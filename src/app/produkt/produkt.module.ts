import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduktPageRoutingModule } from './produkt-routing.module';

import { ProduktPage } from './produkt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduktPageRoutingModule
  ],
  declarations: [ProduktPage]
})
export class ProduktPageModule {}
