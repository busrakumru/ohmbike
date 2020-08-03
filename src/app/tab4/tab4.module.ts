import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab4PageRoutingModule } from './tab4-routing.module';
import { Tab4Page } from './tab4.page';
import {MatExpansionModule} from '@angular/material/expansion';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';
import {MatIconModule} from '@angular/material/icon';
//import { FriendComponent } from '../components/friend/friend.component';
import { OffeneAktvComponent } from '../components/offene-aktv/offene-aktv.component';
import { FahrzeugComponent } from '../components/fahrzeug/fahrzeug.component';
import { GemerkteAktvComponent } from '../components/gemerkte-aktv/gemerkte-aktv.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule,
    MatExpansionModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  declarations: [Tab4Page,PopovercomponentPage,OffeneAktvComponent,FahrzeugComponent,GemerkteAktvComponent],
  entryComponents: [PopovercomponentPage]
})
export class Tab4PageModule {}
