import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CatalogserviceService } from '../services/catalogservice.service';
import { NavController } from '@ionic/angular'
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})

export class CatalogPage implements OnInit {

  constructor(

    public navCtrl: NavController,
    public postsService: CatalogserviceService,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private translate: TranslateService) {

  }

  ngOnInit() {
    this.postsService.load();
  }

  /** opens an alert with the image and title of the product. The user has the option to navigate to the website of Ohmbike 
   * to get more information of the products.
   */
  async goDetails(post) {

    await this.alertCtrl.create({
      message: `<img src="${post.image}" >` + post.title,
      buttons: [
        {
          text: this.translate.instant('ALERTS-CATALOG.btn'),
          handler: () => {
            window.open('https://www.ohmbike.de/', '_blank', 'location=yes');
          }
        }]
    })
      .then(alertEl => {
        alertEl.present();
      });
  }

  async goDetail(scooter) {

    await this.alertCtrl.create({
      message: `<img src="${scooter.image}" >` + scooter.title,
      buttons: [
        {
          text: this.translate.instant('ALERTS-CATALOG.btn'),
          handler: () => {
            window.open('https://www.ohmbike.de/', '_blank', 'location=yes');
          }
        }]
    })
      .then(alertEl => {
        alertEl.present();
      });
  }

  async goProduct(board) {

    await this.alertCtrl.create({
      message: `<img src="${board.image}" >` + board.title,
      buttons: [
        {
          text: this.translate.instant('ALERTS-CATALOG.btn'),
          handler: () => {
            window.open('https://www.ohmbike.de/', '_blank', 'location=yes');
          }
        }]
    })
      .then(alertEl => {
        alertEl.present();
      });
  }
}
