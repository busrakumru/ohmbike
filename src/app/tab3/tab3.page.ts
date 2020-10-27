import { Component } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { TranslateService } from '@ngx-translate/core';
import { VehiclesService } from '../services/vehicles.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  minDate: Date;
  maxDate: Date;

  constructor(
    public aroute: ActivatedRoute,
    private menuCtl: MenuController,
    private barcodeScanner: BarcodeScanner,
    public route: Router,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    private translate: TranslateService,
    public vehicleService: VehiclesService
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear, 0, 1);
    this.maxDate = new Date(currentYear + 20, 11, 31);
  }

  /** this function will refresh the page by pulling down */
  refresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  /** opens the filter menu */
  openFirst() {
    this.menuCtl.enable(true, 'first');
    this.menuCtl.open('first');
  }

  /** opens the scanner function to scan the qr-code */
  async scanCode() {

    console.log('scanning');
    this.barcodeScanner.scan().then(
      barcodeData => {
        if (!barcodeData.cancelled) {
          for (var x = 0; x <= this.vehicleService.vehicles.length; x++) {
            if (barcodeData.text == this.vehicleService.vehicles[x].title) {

              let navigationExtras: NavigationExtras = {
                queryParams: {
                  special: JSON.stringify(barcodeData.text),
                }
              }; this.route.navigate(['product'], navigationExtras);
            }
          }
          this.showAlert();
        }
      })
  }

  async showAlert() {

    const alert = await this.alertCtrl.create({
      header: this.translate.instant('ALERT-SCANCODE.header'),
      message: this.translate.instant('ALERT-SCANCODE.message'),
      buttons: [
        {
          text: 'Ok',
          role: 'cancel'
        },
        {
          text: this.translate.instant('ALERT-SCANCODE.try-it-again'),
          handler: () => {
            this.scanCode();
          }
        }
      ]
    });
    await alert.present();
  }
}