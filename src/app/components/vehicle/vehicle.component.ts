import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import * as firebase from 'firebase';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {

  //fahrzeuge:any[]=[];

  vehicles:any[]=[];

  
  data:any;

  constructor(

    private afs: AngularFirestore) { 

  }


  ngOnInit() {


/** gets all the added vehicle objects from firestore and pushs id's on each of them */

    this.afs.collection(`vehicles`).snapshotChanges().subscribe(collectionItems => {

      collectionItems.forEach(a => {

        let vehicle:any = a.payload.doc.data();
        vehicle.id = a.payload.doc.id;

        
        this.vehicles.push(vehicle);

        firebase.firestore().collection("vehicles").get().then((queryDocumentSnapshot) => {
          this.vehicles = queryDocumentSnapshot.docs;
        }).catch((err)=>{
    
          alert(err);
        })

      })

    });

    
  }

/** deletes the selected vehicle */
  delete(vehicle){

    firebase.firestore().collection(`vehicles`).doc(vehicle.id).delete();
    console.log('vehicle is deleted !')
  }
}
