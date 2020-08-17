import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { LanguageService } from '../services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  languages = [];
  selected = '';

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(
    private router: Router,
    public alertCtrl: AlertController,
    private languageService: LanguageService,
    private translate: TranslateService,
    private iab: InAppBrowser,
    public toastController: ToastController
  ) { }

  ngOnInit() {

    /** gets the default language */
    this.languages = this.languageService.getLanguages();
    this.selected = this.languageService.selected;
  }

  /** changes the language and informs the user about it with a toast */
  async select(lng) {

    const toast = await this.toastController.create({
      message: this.translate.instant('ALERTS-SETTINGS.toast-setting-language'),
      duration: 1000,
      color: "dark"
    });
    await toast.present();
    this.languageService.setLanguage(lng);
  }

  /** basic alert function that takes the needed header and message from the functions below */
  async showAlert(header: string, message: string) {

    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  /** info alert for participation  */
  async AlertParticipation() {
    this.showAlert(this.translate.instant('ALERTS-SETTINGS.alert-participation-title'),
      this.translate.instant('ALERTS-SETTINGS.alert-participation-text'))
  }

  /** info alert for new products in the Catalog page  */
  async AlertCatalog() {
    this.showAlert(this.translate.instant('ALERTS-SETTINGS.alert-catalog-title'),
      this.translate.instant('ALERTS-SETTINGS.alert-catalog-text'))
  }

  /** info alert for advertisings */
  async AlertAdvertising() {
    this.showAlert(this.translate.instant('ALERTS-SETTINGS.alert-advertising-title'),
      this.translate.instant('ALERTS-SETTINGS.alert-advertising-text'))
  }

  /** navigates to the about us page */
  goAboutUs() {
    this.router.navigate(['aboutus']);
  }

  /** navigates to imprint page */
  goImprint() {
    this.router.navigate(['imprint']);
  }

  /** navigates to privacy in the OhmBike website */
  goPrivacy() {
    window.open('https://www.ohmbike.de/pages/datenschutz', '_blank', 'location=yes');
  }

  /**navigates to the textsize page */
  goTextSize() {
    this.router.navigate(['textsize']);
  }
}