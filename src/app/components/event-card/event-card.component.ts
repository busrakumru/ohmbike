import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {

  /** dummy event */
  eventcard = [{
    name: 'Max',
    title: 'kurze Fahrt durch Wedding',
    startTime: '13.00 Uhr',
    endTime: '14:00 Uhr',
    startPlace: 'naunerplatz',
    endPlace: 'Seestraße',
    description: 'zu lang',
    length: '29km'
  }]

  constructor(
    public toastController: ToastController,
    private router: Router,
    private translate: TranslateService
  ) { }

  ngOnInit() { }

  /** sends the data and navigates to the deatils page */
  async details(detail) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(detail),
      }
    };
    console.log("Data has been sent!");
    this.router.navigate(['details'], navigationExtras);
  }

  /** the default visiblity of the bookmark is outlined and without color */
  visible = false;

  /** as soon as the user taps on the bookmark, it will be colored and sends the data to the noted list in the profile page */
  async note(detail) {

    this.visible = !this.visible;
    if (this.visible) {
      const toast = await this.toastController.create({
        message: this.translate.instant('TOASTS.cardob-noted'),
        duration: 2000,
        color: 'dark'
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

      /** deletes the noted event from the list */
      const toast = await this.toastController.create({
        message: this.translate.instant('TOASTS.cardob-delete'),
        duration: 1000,
        color: 'dark'
      });
      await toast.present();
    }
  }

  /** allows the user to participate on an event */
  async participate(detail) {

    const toast = await this.toastController.create({
      message: this.translate.instant('TOASTS.event-participation'),
      duration: 2000,
      color: 'dark'
    });
    await toast.present();

    let navigationExtras: NavigationExtras = {
      queryParams: {
        specialtitle: JSON.stringify(detail),
      }
    };
    console.log("Data has been sent!");
    this.router.navigate(['tabs/tab4'], navigationExtras);
  }
}