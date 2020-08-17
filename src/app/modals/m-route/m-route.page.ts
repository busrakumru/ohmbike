import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-m-route',
  templateUrl: './m-route.page.html',
  styleUrls: ['./m-route.page.scss'],
})
export class MRoutePage implements OnInit {

  constructor(
     private modalController: ModalController,
     public toastController: ToastController,
     public alertController: AlertController,
     private translate: TranslateService,
     private iab: InAppBrowser,

    ) {}

  ngOnInit() {}

  /** closes the modal page */
  async closeModal(){
    await this.modalController.dismiss();
  }

  /** this function isn't complete. It should start the given route */
  async start(){
  
      const alert = await this.alertController.create({
      header: this.translate.instant('ROUTE-MODAL.alert-header'),
      message: this.translate.instant('ROUTE-MODAL.alert-message'),
      buttons: [{
        text:this.translate.instant('ROUTE-MODAL.alert-btn-delete'),
      handler:()=>{
      }},{
        text:this.translate.instant('ROUTE-MODAL.alert-btn-continue'),
      handler:()=>{
        this.iab.create('https://www.google.com/maps');
      }}]
    });
    await alert.present();
    await this.modalController.dismiss();
  }
}