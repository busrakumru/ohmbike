import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextgroessePageRoutingModule } from './textgroesse-routing.module';

import { TextgroessePage } from './textgroesse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextgroessePageRoutingModule
  ],
  declarations: [TextgroessePage]
})
export class TextgroessePageModule {}
