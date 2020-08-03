import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { NgCalendarModule  } from 'ionic2-calendar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment'; 
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {KatalogserviceService } from './services/katalogservice.service';
import{ HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { MAT_DATE_LOCALE } from '@angular/material/core';


//weiss nicht, ob die benutzt werden !
import { Camera } from '@ionic-native/camera/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            IonicStorageModule.forRoot(),
            AppRoutingModule, 
            BrowserAnimationsModule,
            FormsModule,
            NgCalendarModule,
            MatButtonModule,
            MatMenuModule,
            MatIconModule,
            MatDatepickerModule,
            MatFormFieldModule,
            MatInputModule,
            MatNativeDateModule,
            ReactiveFormsModule,
            AngularFireModule.initializeApp(environment.firebase),
            AngularFireAuthModule,
            AngularFireDatabaseModule,
            AngularFireStorageModule,
            AngularFirestoreModule,
            HttpClientModule],
          
  providers: [
    StatusBar,
    SplashScreen,
    {provide: MAT_DATE_LOCALE, useValue: 'de'},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService,
    MatIconModule,
    Camera,
    QRScanner,
    BarcodeScanner,
    KatalogserviceService,
    InAppBrowser
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
