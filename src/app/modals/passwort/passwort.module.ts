import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PasswortPageRoutingModule } from './passwort-routing.module';
import { PasswortPage } from './passwort.page';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswortPageRoutingModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
    
  ],
  declarations: [PasswortPage]
})
export class PasswortPageModule {

  @Input() name: string;
}
