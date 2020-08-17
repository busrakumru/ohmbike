import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import {MatIconModule} from '@angular/material/icon';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { MenuComponent } from '../components/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    MatIconModule,
    TranslateModule,
    MatMenuModule,
    MatButtonModule 
  ],
  declarations: [Tab2Page,MenuComponent]
})
export class Tab2PageModule {}
