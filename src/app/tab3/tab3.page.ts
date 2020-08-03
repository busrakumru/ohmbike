import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AngularFirestore } from '@angular/fire/firestore';

import * as firebase from 'firebase';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  ohmbikeEvent: any[] = [];

  minDate: Date;
  maxDate: Date;

  visible = false;

  events: any[] = [];
  newEvent: any;


  constructor(
    public aroute: ActivatedRoute,
    private menuCtl: MenuController,
    private barcodeScanner: BarcodeScanner,
    public route: Router,
    //private afs: AngularFirestore,

  ) {

    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear, 0, 1);
    this.maxDate = new Date(currentYear + 20, 11, 31);

    this.getUser();

    this.aroute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.newEvent = JSON.parse(params.special);
        console.log("aldim bebek")
      }

    });


  }

  openFirst() {

    this.menuCtl.enable(true, 'first');
    this.menuCtl.open('first');
  }

  getUser() {

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("User is signed in.");
      } else {
        // No user is signed in.
      }
    });
  }

  async scanCode() {
    console.log('startet zu scannen');

    this.barcodeScanner.scan().then(
      barcodeData => {

        if (!barcodeData.cancelled) {

          let navigationExtras: NavigationExtras = {
            queryParams: {
              special: JSON.stringify(barcodeData.text)
            }
          }; this.route.navigate(['produkt'], navigationExtras);

        }
      }).catch((err) => {
        alert(err);

      })


  }

}



