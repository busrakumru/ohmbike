import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { MRoutePage } from '../modals/m-route/m-route.page';
import { Platform } from '@ionic/angular';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor(
    private modalController: ModalController,
    //public platform: Platform,
    public alertController: AlertController,
    ) { }

  async Modal() {

    const modal = await this.modalController.create({
      component: MRoutePage,
      cssClass: 'route-modal-class',

      showBackdrop:false,
      swipeToClose: true
    });

    return await modal.present();
  }


  ionViewDidEnter(){
    
    this.showMap();

  }

  showMap() {

    const location = new google.maps.LatLng(-17.824858, 31.053028);
    const options = {

      center: location,
      zoom: 15,
      disableDefaultUI: true,

    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  async start(){

    const alert = await this.alertController.create({
      header: 'Geschafft !',
      message: 'Wir freuen uns auf weitere Routen mit dir !',
      buttons: [{
        text:'Löschen',
      handler:()=>{


      }},{
        text:'Weiter',
      handler:()=>{

        
      }}]
    });

    await alert.present();
  }
}
