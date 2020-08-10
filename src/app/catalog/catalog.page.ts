import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {CatalogserviceService } from '../services/catalogservice.service';
import {NavController} from '@ionic/angular'
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})

export class CatalogPage implements OnInit {

  
  constructor(
    
    public navCtrl :NavController,
    public postsService: CatalogserviceService  , 
    public alertCtrl: AlertController, 
    private http: HttpClient, 
    public modalCtrl: ModalController,
    private iab: InAppBrowser,
    private translate: TranslateService) { 

  
  }

  ngOnInit() {
  this.postsService.load();
  
  }

  
  /** opens an alert with the image and title of the product. The user has the option to navigate to the website of Ohmbike 
   * to get more information of the products.
   */
  async goDetails(post){

    
    const basicAlert = await this.alertCtrl.create({
      message:  `<img src="${post.image}" >`+ post.title,
      buttons: [
        {text: this.translate.instant('ALERTS-CATALOG.btn'),
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
