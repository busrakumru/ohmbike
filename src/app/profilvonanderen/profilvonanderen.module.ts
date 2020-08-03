import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilvonanderenPageRoutingModule } from './profilvonanderen-routing.module';
import { ProfilvonanderenPage } from './profilvonanderen.page';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

//import { FriendComponent } from '../components/friend/friend.component';

//import { TabsPage } from '../tabs/tabs.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilvonanderenPageRoutingModule,
    MatExpansionModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  declarations: [ProfilvonanderenPage]
})
export class ProfilvonanderenPageModule {}
