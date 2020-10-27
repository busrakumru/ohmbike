import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { VehiclesService } from '../services/vehicles.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public route: Router,
    private barcodeScanner: BarcodeScanner,
    public vehicleService: VehiclesService,
    private translate: TranslateService,
    public alertCtrl: AlertController
    ) {
  }

  ngOnInit() {}

  /** closes the page  */
  dismiss() {
    this.modalCtrl.dismiss();
  }

  /** opens the camera to scan the qr-code */
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