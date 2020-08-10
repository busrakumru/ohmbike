import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TestuserPageRoutingModule } from './testuser-routing.module';
import { TestuserPage } from './testuser.page';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

//import { FriendComponent } from '../components/friend/friend.component';

//import { TabsPage } from '../tabs/tabs.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestuserPageRoutingModule,
    MatExpansionModule,
    MatIconModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    TranslateModule
  ],
  declarations: [TestuserPage]
})
export class TestuserPageModule {}
