import { Component, OnInit } from '@angular/core';

import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { PasswortPage } from '../passwort/passwort.page';
import { FormControl, Validators } from '@angular/forms';

import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


interface User {
 
  user_name?: string;
  user_nachname?: string;
  
}
@Component({
  selector: 'app-profilbearbeiten',
  templateUrl: './profilbearbeiten.page.html',
  styleUrls: ['./profilbearbeiten.page.scss'],
})
export class ProfilbearbeitenPage implements OnInit {

  

  users: any[] = [];

  user: User = {

    user_name:'',
    user_nachname:''
   

  };

  

  gespeichert = 0;
  //this.name = new FormControl('Dayana', Validators.required)
  //nameInput = new FormControl('', Validators.required);

  //this.name = new FormControl('', Validators.required);
  /*@Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;*/


  constructor(private modalController: ModalController, 
    private navParams: NavParams, private router: Router, 
    public alertController: AlertController,   
     public afAuth: AngularFireAuth,


  ) {

    //this.user = this.navParams.data;





  }



  ngOnInit(){


    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.firestore().doc(`/users/${user.uid}`).get().then(userProfileSnapshot => {
          console.log(userProfileSnapshot.data().uid);

        });
      }
    });
  
    firebase.firestore().collection("users").get().then((queryDocumentSnapshot) => {

      console.log(queryDocumentSnapshot.docs);

      this.users = queryDocumentSnapshot.docs;

    }).catch((err) => {

      console.log(err);
    })

  }
  showLoader: boolean;

  showProgressBar() {
    this.showLoader = true;
  }

  hideProgressBar() {
    this.showLoader = false;
  }



  async closeModal() {

    await this.modalController.dismiss();

  }

  async passwort() {
    const modal = await this.modalController.create({
      component: PasswortPage,
      //cssClass: 'passwort',
      cssClass: 'password-modal-class'

    });
    return await modal.present();
  }

  async test(){

 

    var currentuser = firebase.auth().currentUser;
    var name, uid, nachname;

    if (currentuser != null) {
     
      uid = currentuser.uid;
      name = this.user.user_name;
      nachname = this.user.user_nachname;

      console.dir(currentuser);
    }

    

      firebase.firestore().collection("users").doc(uid).update({

        user_name : "Lisa",
        user_nachname: "Meier"
        

      })


      this.modalController.dismiss();

    
      
    
  }

  speichern() {

   
   
    //this.afs.collection('Events').add(events);
    //this.db.list('Events/').push(events);

    /* setInterval(() => {
       this.gespeichert += .1;
     }, 1000)*/

     
     firebase.firestore().collection("users").doc().update({
      
      user_name : "jdidjs",
    }).then(function() {
    console.log("Document successfully updated!");
}).catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});

     this.modalController.dismiss(this.user);


    /*setInterval(() => {
      this.showProgressBar();
      this.gespeichert += .1;

      if (this.gespeichert === 0.7) {


        this.modalController.dismiss(this.user);

      }
    }, 100)*/

  }

  async profilEntfernen() {

    let alert = await this.alertController.create({
      header: 'Achtung',
      message: 'Möchtest du dein Profil wirklich entfernen ? Somit gehen alle gespeicherten Daten verloren !',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => {
            console.log('Abgebrochen');
          }
        },
        {
          text: 'JA',
          handler: () => {
            this.router.navigate(['/login']);
            this.closeModal();
            console.log('User deleted.');
          }
        }
      ]
    });
    await alert.present();

    var user = firebase.auth().currentUser;

    firebase.firestore().collection("users").doc(user.uid).delete();


    user.delete().then(() => {

      alert;

    }).catch((err) => {
      console.log(err);
    });
  }


}
