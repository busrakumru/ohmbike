import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Tab3PageRoutingModule } from './tab3-routing.module'
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';
import { MenuComponent } from '../components/menu/menu.component';
import { CardOBComponent } from '../components/card-ob/card-ob.component';
import { EventCardComponent } from '../components/event-card/event-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { MyEventCardComponent } from '../components/my-event-card/my-event-card.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    TranslateModule
  ],
  declarations: [Tab3Page, MenuComponent, CardOBComponent, EventCardComponent, MyEventCardComponent]
})
export class Tab3PageModule { }
