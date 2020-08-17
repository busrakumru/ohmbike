import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TextsizePageRoutingModule } from './textsize-routing.module';
import { TextsizePage } from './textsize.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextsizePageRoutingModule,
    TranslateModule
  ],
  declarations: [TextsizePage]
})
export class TextsizePageModule { }
