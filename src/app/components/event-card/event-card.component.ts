import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {


  visible = false;

  eventcard: any[] = [];
  constructor(
    public toastController: ToastController,
    //private aroute: ActivatedRoute,
    private router: Router,
    private afs: AngularFirestore) { }


  ngOnInit() {

    this.afs.collection(`eventcard`).snapshotChanges().subscribe(collectionItems => {
      this.eventcard = [];
      collectionItems.forEach(a => {

        let detail: any = a.payload.doc.data();
        detail.id = a.payload.doc.id;

        this.eventcard.push(detail);

      });
    })
  }

  async merke(detail) {
    this.visible = !this.visible;
    if (this.visible) {

      const toast = await this.toastController.create({
        message: 'Die Route wurde in deiner gemerketen Liste im Profil unter "Gemerkte Aktivitäten" hinzugefügt.',
        duration: 2000,
        color: 'dark'
      });
      await toast.present();

      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(detail),


        }
      };
      console.log("Daten wurden weitergeleitet!");


      this.router.navigate(['tabs/tab4'], navigationExtras);

    } else {

      const toast = await this.toastController.create({
        message: 'Die Route wurde aus der Liste entfernt.',
        duration: 1000,
        color: 'dark'
      });
      await toast.present();

    }
  }

  async details(detail) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(detail),

      }
    };
    console.log("Daten wurden weitergeleitet!");


    this.router.navigate(['details'], navigationExtras);

  }


  async teilnehmen() {

    const toast = await this.toastController.create({
      message: 'Du nimmst an der Route teil. Es wurde in deinem Profil unter der "Offene Aktivitäten" - Liste hinzugefügt.',
      duration: 2000,
      color: 'dark'
    });
    await toast.present();

    this.router.navigate(['tabs/tab4']);


  }

}
