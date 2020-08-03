import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-abgeschlossene-aktv',
  templateUrl: './abgeschlossene-aktv.component.html',
  styleUrls: ['./abgeschlossene-aktv.component.scss'],
})
export class AbgeschlosseneAktvComponent implements OnInit {

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  closePage(){

    this.modalCtrl.dismiss();

  }

  ionViewDidEnter(){
    
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
