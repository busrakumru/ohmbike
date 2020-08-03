import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

declare var google: any;


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  detail:any;
  map: any;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;


  constructor(
    //private modalCtrl: ModalController,
    public afs: AngularFirestore,
    public route: ActivatedRoute,
    public toastController: ToastController
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

  async teilnehmen() {

    const toast = await this.toastController.create({
      message: 'Du nimmst an der Route teil. Es wurde in deinem Profil unter der "Offene Aktivitäten" - Liste hinzugefügt.',
      duration: 2000,
      color: 'dark'
    });
    await toast.present();

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
