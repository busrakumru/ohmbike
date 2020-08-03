import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-card-ob',
  templateUrl: './card-ob.component.html',
  styleUrls: ['./card-ob.component.scss'],
})
export class CardOBComponent implements OnInit {

  ohmbikeEvent: any[] = [];

  constructor(
    public toastController: ToastController,
    private afs: AngularFirestore,
    private router: Router) {
  }

  visible = false;

  async details(detail) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(detail),

      }
    };
    console.log("Daten wurden weitergeleitet!");

    this.router.navigate(['detailsob'], navigationExtras);

  }


  async merke(detail) {
    this.visible = !this.visible;

    if (this.visible) {

      const toast = await this.toastController.create({
        message: 'Die Route wurde in deinem Profil unter der "Gemerkte Aktivitäten" - Liste hinzugefügt.',
        duration: 2000,
        color: 'dark',

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
        color: 'dark',

      });
      await toast.present();

    }
  }

  ngOnInit() {


    this.afs.collection(`ohmbikeEvent`).snapshotChanges().subscribe(collectionItems => {
      this.ohmbikeEvent = [];
      collectionItems.forEach(a => {

        let detail: any = a.payload.doc.data();
        detail.id = a.payload.doc.id;

        this.ohmbikeEvent.push(detail);


      })
    });
  }

}
