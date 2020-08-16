import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { OpenAktvComponent } from '../open-aktv/open-aktv.component';


declare var google: any;

@Component({
  selector: 'app-c-detail',
  templateUrl: './c-detail.component.html',
  styleUrls: ['./c-detail.component.scss'],
})
export class CDetailComponent implements OnInit {

  name: any;
  beginning: any;
  end: any;
  from: any;
  to: any;
  length: any;
  notes: any;

  /* map integration */

  map: any;

  visible = false;

  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private router: Router,
    private translate: TranslateService,
  ) {
  }

  ngOnInit() { }

  /* closes the modal page */
  closePage() {

    this.modalCtrl.dismiss();

  }

  /** allows the user to participate on the competition. If the button is clicked it will send the data to the open-actv. 
   * component and a toast will be appear to inform the user about the participation.
   */
  async participate() {


    let navigationExtras: NavigationExtras = {

      queryParams: {

        specialName: JSON.stringify(this.name),
        specialDetailBeginning: JSON.stringify(this.beginning),
        specialDetailEnd: JSON.stringify(this.end),
        specialDetailFrom: JSON.stringify(this.from),
        specialDetailTo: JSON.stringify(this.to),
        specialDetailLength: JSON.stringify(this.length),
        specialDetailNotes: JSON.stringify(this.notes),


      }

    }

    this.router.navigate(['tabs/tab4'], navigationExtras);


    const alert = await this.alertCtrl.create({
      header: this.translate.instant('COMPETITIONS-DETAIL.alert-header'),
      message: this.translate.instant('COMPETITIONS-DETAIL.alert-message'),
      buttons: [this.translate.instant('COMPETITIONS-DETAIL.alert-btn-back'), 'OK']
    });

    await alert.present();

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

  /** deletes the selected activity from the list */
  async notParticipate() {

    let alert = await this.alertCtrl.create({
      header: this.translate.instant('ALERT-OPEN-ACTIVITY.alert-header'),
      message: this.translate.instant('ALERT-OPEN-ACTIVITY.alert-message'),
      buttons: [
        {
          text: this.translate.instant('ALERT-OPEN-ACTIVITY.alert-btn-not-participate'),
          handler: () => {
            console.log('Freund wurde gelöscht');
            //this is just an alert and the delete function doesn't exist 
          }
        },
        {
          text: this.translate.instant('ALERT-OPEN-ACTIVITY.alert-btn-cancel'),
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
