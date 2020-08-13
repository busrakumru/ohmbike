import { Component } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase';
import { error } from 'protractor';
//import { AngularFireDatabase } from '@angular/fire/database/database';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  ohmbikeEvent: any[] = [];

  minDate: Date;
  maxDate: Date;

  events: any[] = [];
  newEvent: any;

  item: any;


  vehicles = [

    { title: 'Fahrzeug-1', image: 'assets/vehicle-qr-codes/qrcode-v1.png' },
    { title: 'Fahrzeug-2', image: 'assets/vehicle-qr-codes/qrcode-v2.png' },
    { title: 'Fahrzeug-3', image: 'assets/vehicle-qr-codes/qrcode-v3.png' }

  ];

  constructor(
    public aroute: ActivatedRoute,
    private menuCtl: MenuController,
    private barcodeScanner: BarcodeScanner,
    public route: Router,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController

    // public db: AngularFireDatabase,


  ) {

    /*firebase.database().ref('/Events/').once('value').then(function(data){

      alert(JSON.stringify(data.val()));
    });*/


    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear, 0, 1);
    this.maxDate = new Date(currentYear + 20, 11, 31);

    /** gets the event data from tab1 */
    this.aroute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.newEvent = JSON.parse(params.special);
        console.log("got data !");

      }

    });

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

          for (var x = 0; x <= this.vehicles.length; x++) {

            if (barcodeData.text == this.vehicles[x].title) {

              let navigationExtras: NavigationExtras = {
                queryParams: {
                  special: JSON.stringify(barcodeData.text)
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
      header:"Fehler",
      message:"Dies ist ein ungültiger QR-Code !",
      buttons: ['OK']
    });

    await alert.present();

  }
}