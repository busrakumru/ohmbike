import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistrationPageRoutingModule } from './registration-routing.module';
import { RegistrationPage } from './registration.page';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationPageRoutingModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    TranslateModule,


    ReactiveFormsModule
  ],

  declarations: [RegistrationPage]
})
export class RegistrationPageModule {}
