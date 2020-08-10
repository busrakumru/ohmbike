import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Data } from '@angular/router';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

import * as _moment from 'moment';
import * as firebase from 'firebase/app';
import { LanguageService } from './services/language.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  date = new FormControl(new Date().toISOString);

  minDate: Data;
  maxDate: Data;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtl: MenuController,
    private languageService: LanguageService
  ) {
    this.initializeApp();
    firebase.initializeApp(environment.firebase);

    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear, 0, 1);
    this.maxDate = new Date(currentYear + 20, 11, 31);

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.languageService.setInitialAppLanguage();

    });
  }

  /** this function isn't complete. It should filter the customized entries  */
  async filter() {

    await this.menuCtl.close();


  }
}
