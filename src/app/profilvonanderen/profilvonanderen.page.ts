import { Component, OnInit,ViewChild } from '@angular/core';

import {MatAccordion} from '@angular/material/expansion';

import { PopoverController, ModalController } from '@ionic/angular';

import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

//import { Tab4Page } from '../tab4/tab4.page';
import * as firebase from 'firebase';


@Component({
  selector: 'app-profilvonanderen',
  templateUrl: './profilvonanderen.page.html',
  styleUrls: ['./profilvonanderen.page.scss'],
})
export class ProfilvonanderenPage implements OnInit {

  segment = 'aktivitaet';

  data: any;
  testuser:any;

  test = [];
  testusers = [];


@ViewChild(MatAccordion) accordion: MatAccordion;

constructor(
  //private popoverController: PopoverController,
   //private modalController: ModalController, 
   private aroute: ActivatedRoute,
   public router: Router,
   public afs: AngularFirestore,
   //public tab4: Tab4Page

   ) { 

  this.aroute.queryParams.subscribe(params => {
    if (params && params.special) {
      this.testuser = JSON.parse(params.special);
    }
  });

}

async ngOnInit() {

  this.afs.collection(`test`).snapshotChanges().subscribe(collectionItems => {

    this.test = [];
    collectionItems.forEach(a => {
      let testId: any = a.payload.doc.data();
      testId.id = a.payload.doc.id;
      this.test.push(testId);
    })
  })

  this.afs.collection(`testusers`).snapshotChanges().subscribe(collectionItems => {

    collectionItems.forEach(a => {
      let testuser: any = a.payload.doc.data();
      testuser.id = a.payload.doc.id;
      this.testusers.push(testuser);

      firebase.firestore().collection("testusers").get().then((queryDocumentSnapshot) => {

        this.testusers = queryDocumentSnapshot.docs;
      })


    })
  })

  this.test = await this.initializeItems();

}

async initializeItems(): Promise<any> {
  const test = await this.afs.collection('test').valueChanges().pipe(first()).toPromise();
  return test;


}

async filtern(evt) {

  this.test = await this.initializeItems();
  const suche = evt.srcElement.value;

  if (!suche) {

    return;
  }
  this.test = this.test.filter(currentFriend => {

    if (currentFriend.name && suche) {

      return (currentFriend.name.toLowerCase().indexOf(suche.toLowerCase()) > -1 || currentFriend.nachname.toLowerCase().indexOf(suche.toLowerCase()) > -1);
    }
  })


}

goFriend(testId) {

  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(testId)
    }
  };
  this.router.navigate(['test'], navigationExtras);
}

remove(testuser) {

  //this.afs.collection(`testusers`).doc(testuser.id).delete();

  this.afs.doc(`testusers/`+ testuser.id).delete().then(nav =>{

    console.log("Freund wurde entfernt !");

    this.router.navigate(['/tabs/tab4']);

  });


}



 freundEntfernen(testuser){


  //this.afs.collection("testusers").doc("l5ColioGF7gvwY1SAbSU").delete();
  //this.afs.doc(`testusers/${testuser.id}`).delete();

  /*let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(testuser.id)
    }
  };*/
 // this.router.navigate(['/tabs/tab4']);





  //this.router.navigate(['/tabs/tab4']);



}

}
