import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailsobPageRoutingModule } from './detailsob-routing.module';
import { DetailsobPage } from './detailsob.page';
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsobPageRoutingModule,
    TranslateModule
  ],
  declarations: [DetailsobPage]
})
export class DetailsobPageModule {}
