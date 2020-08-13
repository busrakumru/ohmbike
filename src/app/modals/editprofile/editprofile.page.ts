import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { PasswordPage } from '../password/password.page';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { TranslateService } from '@ngx-translate/core';

import * as firebase from 'firebase';


interface User {
 
  user_name?: string;
  user_nachname?: string;
  
}
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})

export class EditprofilePage implements OnInit {

  users: any[] = [];

  user: User = {

    user_name:'',
    user_nachname:''
   
  };

  saved = 0;

  constructor(
    private modalController: ModalController, 
    private router: Router, 
    public alertController: AlertController,   
    public afAuth: AngularFireAuth,
    public translate: TranslateService


  ) {}



  ngOnInit(){

/** gets the current user from firestore  */
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

  /** progressbar which will show the progressflow after the user saves the new data */
  showLoader: boolean;

  showProgressBar() {
    this.showLoader = true;
  }

  hideProgressBar() {
    this.showLoader = false;
  }


/** closes the modal page */
  async closeModal() {

    await this.modalController.dismiss();

  }

/** opens the modal page for resetting the password */
  async password() {
    const modal = await this.modalController.create({
      component: PasswordPage,
      cssClass: 'password-modal-class',
      
      swipeToClose: true


    });
    return await modal.present();
  }

  /** updates the new data -- dummy function*/
  async save(){


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

      setInterval(() => {
        this.showProgressBar();
        this.saved += .1;
  
        if (this.saved === 0.7) {
  
  
          this.modalController.dismiss();
  
        }
      }, 100)      
    
  }

/** deletes the user profile from firestore */
  async deleteProfile() {

    let alert = await this.alertController.create({
      header: this.translate.instant('EDIT-PROFILE.alert-header'),
      message: this.translate.instant('EDIT-PROFILE.alert-message'),
      buttons: [
        {
          text: this.translate.instant('EDIT-PROFILE.alert-btn-cancel'),
          role: 'cancel',
          handler: () => {
            console.log('Abgebrochen');
          }
        },
        {
          text: this.translate.instant('EDIT-PROFILE.alert-btn-yes'),
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
