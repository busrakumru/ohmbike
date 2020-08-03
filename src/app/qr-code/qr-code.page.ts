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


  dismiss() {

    this.modalCtrl.dismiss();
  }


  async scanCode() {
    console.log('startet zu scnannen');

    this.barcodeScanner.scan().then(
      barcodeData => {

        if (!barcodeData.cancelled) {

          let navigationExtras: NavigationExtras = {
            queryParams: {
              special: JSON.stringify(barcodeData.text)
            }
          }; this.route.navigate(['produkt2'], navigationExtras);

        } 

      }).catch((err) => {
        alert(err);

      })

  }

}
