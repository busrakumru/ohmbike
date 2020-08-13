import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import * as firebase from 'firebase';
import { AlertController, IonMenuToggle } from '@ionic/angular';

interface Vehicle {

  title: string

}

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})


export class VehicleComponent implements OnInit {

  //fahrzeuge:any[]=[];

  vehicles: any[] = [];


  data: any;

  vehicle: Vehicle = {

    title: ''

  };

  constructor(

    private afs: AngularFirestore,
    private alertCtrl: AlertController) {

  }


  ngOnInit() {


    /** gets all the added vehicle objects from firestore and pushs id's on each of them */

    this.afs.collection(`vehicles`).snapshotChanges().subscribe(collectionItems => {

      collectionItems.forEach(a => {

        let vehicle: any = a.payload.doc.data();
        vehicle.id = a.payload.doc.id;


        this.vehicles.push(vehicle);

        firebase.firestore().collection("vehicles").get().then((queryDocumentSnapshot) => {
          this.vehicles = queryDocumentSnapshot.docs;
        }).catch((err) => {

          alert(err);
        })

      })

    });


  }

  /** deletes the selected vehicle */
  async delete(vehicle) {

    const alert = await this.alertCtrl.create({

      header: 'Fahrzeug entfernen',
      message: ' Bist du dir sicher, dass du dein Fahrzeug entfernen möchetst ?',

      buttons: ['Abbrechen',

        {
          text: 'Entfernen',
          handler: () => {


            firebase.firestore().collection(`vehicles`).doc(vehicle.id).delete();
            console.log('vehicle is deleted !')

          }

        }]
    })
    await alert.present();



  }


  /** opens an alert to edit the name of the vehicle */
  async edit(vehicle) {

    firebase.firestore().collection(`vehicles`).doc(vehicle.id).get();


    const alert = await this.alertCtrl.create({

      header: 'Fahrzeug umbenennen',
      inputs: [{

        value: vehicle.data().title,
        type: 'text'
      }

      ],

      buttons: ['Abbrechen',

        {
          text: 'OK',
          handler: () => {

            this.afs.firestore.collection(`vehicles`).doc(vehicle.id).update({

              "title": this.vehicle.title

            });


          }

        }]
    })
    await alert.present();


  }
}