import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-card-ob',
  templateUrl: './card-ob.component.html',
  styleUrls: ['./card-ob.component.scss'],
})
export class CardOBComponent implements OnInit {


  /** dummy event */
  ohmbikeEvent=[{

    title: 'Zoo',
    startPlace: 'Zoologischer Garten',
    description: 'Hier kommt die Beschreibung über die Route !',
    length:'5km'

  }]

  constructor(

    public toastController: ToastController,
    private router: Router,
    private translate: TranslateService) {

  }

   ngOnInit() {}

  /** sends the data and navigates to the deatils page */
  async details(detail) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(detail),

      }
    };
    console.log("Data has been sent!");

    this.router.navigate(['detailsob'], navigationExtras);

  }

  /** the default visiblity of the bookmark is outlined and without color */
  visible = false;

  /** as soon as the user taps on the bookmark, it will be colored and sends the data to the profile page */
  async note(detail) {
    this.visible = !this.visible;

    if (this.visible) {

      const toast = await this.toastController.create({
        message: this.translate.instant('TOASTS.cardob-noted'),
        duration: 2000,
        color: 'dark',

      });
      await toast.present();

      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(detail),


        }
      };
      console.log("Data has been sent!");


      this.router.navigate(['tabs/tab4'], navigationExtras);

    } else {

      const toast = await this.toastController.create({
        message: this.translate.instant('TOASTS.cardob-delete'),
        duration: 1000,
        color: 'dark',

      });
      await toast.present();

      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(this.visible),


        }
      };
      console.log("Data has been sent!");


      this.router.navigate(['tabs/tab4'], navigationExtras);

    }
  }

}
