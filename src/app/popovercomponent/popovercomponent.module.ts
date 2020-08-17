import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PopovercomponentPageRoutingModule } from './popovercomponent-routing.module';
import { PopovercomponentPage } from './popovercomponent.page';
import {MatIconModule} from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopovercomponentPageRoutingModule,
    MatIconModule,
    TranslateModule
  ],
  declarations: [PopovercomponentPage]
})
export class PopovercomponentPageModule {}
