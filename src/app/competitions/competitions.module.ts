import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetitionsPageRoutingModule } from './competitions-routing.module';

import { CompetitionsPage } from './competitions.page';
import { TranslateModule } from '@ngx-translate/core';
import { CDetailComponent } from '../components/c-detail/c-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetitionsPageRoutingModule,
    TranslateModule,
    
  ],
  declarations: [CompetitionsPage, CDetailComponent]
})
export class CompetitionsPageModule {}
