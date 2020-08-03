import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-w-detail',
  templateUrl: './w-detail.component.html',
  styleUrls: ['./w-detail.component.scss'],
})
export class WDetailComponent implements OnInit {

  name: any;
  beginn: any;
  ende: any;
  start: any;
  ziel: any;
  strecke: any;
  hinweise: any;

  /*@Input() name: string;
  @Input() beginn: string;
  @Input() ende: string;
  @Input() start: string;
  @Input() ziel: string;
  @Input() hinweise: string;*/

  map: any;

  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private router: Router) { }

  ngOnInit() { }

  closePage() {

    this.modalCtrl.dismiss();

  }

  async teilnehmen() {


    let navigationExtras: NavigationExtras = {

      queryParams: {

        specialName: JSON.stringify(this.name),
        specialDetailBeginn: JSON.stringify(this.beginn),
        specialDetailEnde: JSON.stringify(this.ende),
        specialDetailStart: JSON.stringify(this.start),
        specialDetailZiel: JSON.stringify(this.ziel),
        specialDetailStrecke: JSON.stringify(this.strecke),
        specialDetailHinweise: JSON.stringify(this.hinweise)

      }

    }

    this.router.navigate(['tabs/tab4'], navigationExtras);


    const alert = await this.alertCtrl.create({
      header: 'Teilgenommen',
      message: 'Super. Du nimmst an dem Wettbewerb teil. Wir freuen uns auf dich !',
      buttons: ['Zurück', 'OK']
    });

    await alert.present();

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
