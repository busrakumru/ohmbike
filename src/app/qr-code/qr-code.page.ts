import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

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
    private barcodeScanner: BarcodeScanner) {

  }

  ngOnInit() {
  }

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

          let navigationExtras: NavigationExtras = {
            queryParams: {
              special: JSON.stringify(barcodeData.text)
            }
          }; this.route.navigate(['product2'], navigationExtras);

        }

      }).catch((err) => {
        alert(err);

      })

  }

}
