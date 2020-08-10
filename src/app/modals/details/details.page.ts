import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastController } from '@ionic/angular';
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

  detail:any;

  /** map integration */
  map: any;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;


  constructor(

    public afs: AngularFirestore,
    public route: ActivatedRoute,
    public toastController: ToastController,
    private translate: TranslateService,
    private router: Router


    ) { 

      /** gets the data from the event-card component */
     this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.detail = JSON.parse(params.special);
          

          console.log("Got the data!");

        }
        
      });
    }

  ngOnInit() {
  }

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

}
