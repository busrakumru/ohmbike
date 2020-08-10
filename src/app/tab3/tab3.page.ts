import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AngularFireAuth } from '@angular/fire/auth';



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


  constructor(
    public aroute: ActivatedRoute,
    private menuCtl: MenuController,
    private barcodeScanner: BarcodeScanner,
    public route: Router,
    public afAuth: AngularFireAuth

  ) {

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
  refresh(event){

    setTimeout(() => {

      event.target.complete();
    },2000);
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

          let navigationExtras: NavigationExtras = {
            queryParams: {
              special: JSON.stringify(barcodeData.text)
            }
          }; this.route.navigate(['product'], navigationExtras);

        }
      }).catch((err) => {
        alert(err);

      })


  }

}