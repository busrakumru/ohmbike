import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilbearbeitenPageRoutingModule } from './profilbearbeiten-routing.module';

import { ProfilbearbeitenPage } from './profilbearbeiten.page';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilbearbeitenPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfilbearbeitenPage]
})
export class ProfilbearbeitenPageModule {}
