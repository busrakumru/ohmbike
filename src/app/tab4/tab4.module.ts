import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab4PageRoutingModule } from './tab4-routing.module';
import { Tab4Page } from './tab4.page';
import { MatExpansionModule } from '@angular/material/expansion';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';
import { MatIconModule } from '@angular/material/icon';
import { OpenAktvComponent } from '../components/open-aktv/open-aktv.component';
import { VehicleComponent } from '../components/vehicle/vehicle.component';
import { NotedAktvComponent } from '../components/noted-aktv/noted-aktv.component';
import { CompletedAktvComponent } from '../components/completed-aktv/completed-aktv.component';
import { EventCardComponent } from '../components/event-card/event-card.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule,
    MatExpansionModule,
    MatIconModule,
    ReactiveFormsModule,    
    Ng2SearchPipeModule,
    TranslateModule,


  ],

  declarations: [Tab4Page,
                 PopovercomponentPage,
                 OpenAktvComponent,
                 VehicleComponent,
                 NotedAktvComponent,
                 CompletedAktvComponent,
                 EventCardComponent,
                 ],
  entryComponents: [PopovercomponentPage]
})
export class Tab4PageModule {}
