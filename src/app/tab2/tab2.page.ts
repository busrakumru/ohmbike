import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { MRoutePage } from '../modals/m-route/m-route.page';
import { Platform } from '@ionic/angular';
import { ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

declare var google: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  /** map integration */
  map: any;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor(

    private modalController: ModalController,
    public alertController: AlertController,
    private translate: TranslateService

    ) { }

  /** opens the modal page for the ios version */
  async Modal() {

    const modal = await this.modalController.create({
      component: MRoutePage,
      cssClass: 'route-modal-class',

      showBackdrop:false,
      swipeToClose: true
    });

    return await modal.present();
  }


  /* shows the map */
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

  /** this function isn't complete. It should start the given route */
  async start(){

    const alert = await this.alertController.create({
      header: this.translate.instant('TAB2.alert-header'),
      message: this.translate.instant('TAB2.alert-message'),
      buttons: [{
        text:this.translate.instant('TAB2.alert-btn-delete'),
      handler:()=>{
        

      }},{
        text:this.translate.instant('TAB2.alert-btn-continue'),
      handler:()=>{

        
      }}]
    });

    await alert.present();
  }
}
