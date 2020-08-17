import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

declare var google: any;

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  detail: any;
  test: any;
  visible = false;

  /** map integration */
  map: any;
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor(

    public afs: AngularFirestore,
    public route: ActivatedRoute,
    public toastController: ToastController,
    private translate: TranslateService,
    private router: Router,
    private alertCtrl: AlertController,
  ) {

    /** gets the data from the event-card component */
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.detail = JSON.parse(params.special);
        this.test = JSON.parse(params.specialVisible);
        console.log("Got the data!");
      }
    });
  }

  ngOnInit() { }

  /** allows the user to participate on an event. It will be placed in the "open-activities" list in the profile */
  async participate(detail) {

    const toast = await this.toastController.create({
      message: this.translate.instant('TOASTS.event-participation'),
      duration: 2000,
      color: 'dark'
    });
    await toast.present();

    let navigationExtras: NavigationExtras = {
      queryParams: {
        specialtitle: JSON.stringify(detail),
      }
    };
    console.log("Data has been sent!");
    this.router.navigate(['tabs/tab4'], navigationExtras);
  }

  /* shows the map */
  ionViewDidEnter() {
    this.showMap();
  }

  showMap() {

    const location = new google.maps.LatLng(-17.824858, 31.053028);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  /** shows an alert if the user taps on the 'not participate anymore' button */
  async notParticipate() {

    let alert = await this.alertCtrl.create({
      header: this.translate.instant('DETAILS-PAGE.alert-header'),
      message: this.translate.instant('DETAILS-PAGE.alert-message'),
      buttons: [
        {
          text: this.translate.instant('DETAILS-PAGE.alert-btn-not-participate'),
          handler: () => {
            console.log('Freund wurde gelöscht');
            //this is just an alert and the delete function doesn't exist 
          }
        },
        {
          text: this.translate.instant('DETAILS-PAGE.alert-btn-cancel'),
          role: 'cancel',
          handler: () => {
            console.log('canceled');
          }
        }
      ]
    });
    await alert.present();
  }
}