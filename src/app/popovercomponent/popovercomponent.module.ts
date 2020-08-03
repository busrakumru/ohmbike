import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopovercomponentPageRoutingModule } from './popovercomponent-routing.module';

import { PopovercomponentPage } from './popovercomponent.page';

import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopovercomponentPageRoutingModule,
    MatIconModule
  ],
  declarations: [PopovercomponentPage]
})
export class PopovercomponentPageModule {}
