import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {KatalogserviceService } from '../services/katalogservice.service';
import {NavController} from '@ionic/angular'
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-katalog',
  templateUrl: './katalog.page.html',
  styleUrls: ['./katalog.page.scss'],
})
export class KatalogPage implements OnInit {

  
  constructor(
    
    public navCtrl :NavController,
    public postsServiece: KatalogserviceService  , 
    public alertCtrl: AlertController, 
    private http: HttpClient, 
    public modalCtrl: ModalController,
    private iab: InAppBrowser) { 

  
  }

  ngOnInit() {
  this.postsServiece.load();
  
  }



  
  async goDetails(post){

    
    const basicAlert = await this.alertCtrl.create({
      message:  `<img src="${post.image}" >`+ post.title,
      buttons: [
        {text:'zum Onlineshop',
        handler:()=>{
          this.iab.create('https://www.ohmbike.de/');
        } 
              
        }]


    })
    .then (alertEl => {
      alertEl.present ();
    });
    
  }


}
