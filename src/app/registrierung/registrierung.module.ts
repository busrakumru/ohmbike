import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistrierungPageRoutingModule } from './registrierung-routing.module';
import { RegistrierungPage } from './registrierung.page';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrierungPageRoutingModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,


    ReactiveFormsModule
  ],

  declarations: [RegistrierungPage]
})
export class RegistrierungPageModule {}
