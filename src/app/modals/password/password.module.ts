import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PasswordPageRoutingModule } from './passwordrouting.module';
import { PasswordPage } from './password.page';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordPageRoutingModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [PasswordPage]
})
export class PasswordPageModule {

  @Input() name: string;
}
