import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

import * as firebase from 'firebase';


@Component({
  selector: 'app-fahrzeug',
  templateUrl: './fahrzeug.component.html',
  styleUrls: ['./fahrzeug.component.scss'],
})
export class FahrzeugComponent implements OnInit {

  fahrzeuge:any[]=[];
  data:any;

  constructor(
   // public aroute: ActivatedRoute,
    private afs: AngularFirestore) { 

  }



  ngOnInit() {

    this.afs.collection(`fahrzeuge`).snapshotChanges().subscribe(collectionItems => {

      collectionItems.forEach(a => {

        let fahrzeug:any = a.payload.doc.data();
        fahrzeug.id = a.payload.doc.id;

        
        this.fahrzeuge.push(fahrzeug);

        firebase.firestore().collection("fahrzeuge").get().then((queryDocumentSnapshot) => {
          this.fahrzeuge = queryDocumentSnapshot.docs;
        }).catch((err)=>{
    
          alert(err);
        })

      })

    });

    
  }


  delete(fahrzeug){

    firebase.firestore().collection(`fahrzeuge`).doc(fahrzeug.id).delete();
    console.log('Fahrzeug gelöscht !')
  }
}
