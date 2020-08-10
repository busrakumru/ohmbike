import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MRoutePageRoutingModule } from './m-route-routing.module';
import { MRoutePage } from './m-route.page';
import {MatIconModule} from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MRoutePageRoutingModule,
    MatIconModule,
    TranslateModule
  ],
  declarations: [MRoutePage]
})
export class MRoutePageModule {}
