import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

declare var google: any;


@Component({
  selector: 'app-detailsob',
  templateUrl: './detailsob.page.html',
  styleUrls: ['./detailsob.page.scss'],
})
export class DetailsobPage implements OnInit {



  ohmbikeEvent: any [] = [];
  detail:any;
  title:any;
  map:any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;


  constructor(
    //private modalCtrl: ModalController,
    public afs: AngularFirestore,
    public route: ActivatedRoute
    ) { 

     this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.detail = JSON.parse(params.special);

          console.log("Daten wurden entnommen!");

        }
        
      });
    }

  ngOnInit() {
  }

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
