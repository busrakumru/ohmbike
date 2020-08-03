import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-m-route',
  templateUrl: './m-route.page.html',
  styleUrls: ['./m-route.page.scss'],
})
export class MRoutePage implements OnInit {

visible=false;
  constructor(
    private modalController: ModalController,
     public toastController: ToastController,
     public alertController: AlertController
    ) { }

  ngOnInit() {
  }

  async closeModal(){

    await this.modalController.dismiss();

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

  
    await this.modalController.dismiss();

  }
}
