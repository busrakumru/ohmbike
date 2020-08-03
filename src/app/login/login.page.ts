import { Component, OnInit, ViewChild } from '@angular/core';
//import { Button } from 'protractor';
import { FormControl, Validators } from '@angular/forms'
import { AlertController } from '@ionic/angular'
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
//import 'firebase/firestore';

interface User {
  email?: string;
  password?: string;

}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = {

    email: '',
    password: '',

  };

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Geben Sie eine E-Mail-Adresse ein ';
    }

    return this.email.hasError('email') ? 'Die E-Mail-Adresse ist nicht gültig' : '';
  }

  constructor(
    public alertCtrl: AlertController,
    public toastController: ToastController,
    public afAuth: AngularFireAuth,
    private router: Router,

  ) {

  }

  /*resetPassword(emailAdress) {
    this.auth.resetPassword()
  }*/

  /*resetPassword() {
    var auth = firebase.auth();
    var emailAdress = 'kkumrubusra@gmail.com';
    return auth.sendPasswordResetEmail(emailAdress)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }*/

  async logIn() {

    try {
      const user = await this.afAuth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      ).then(() => {
        this.router.navigate(['/tabs/tab3']);
      })
      console.log(user);

    } catch (err) {

      console.dir(err);
      if (err.code === "auth/user-not-found") {

        this.showAlert("Information", "Es besteht kein Profil zu dieser E-Mail Adresse ! Bitte überprüfe die Eingabe und versuche es erneut.")

      }
      if (err.code === "auth/wrong-password") {

        this.showAlert("Information", "Dein Passwort stimmt mit der E-Mail Adresse nicht überein ! Bitte überprüfe die Eingabe und versuche es erneut.")


      }
      if (err.code === "auth/invalid-email") {

        this.showAlert("Information", "Bitte überprüfe die Eingaben und versuche es erneut.")

      }

    }
  }

  async showAlert(header: string, message: string) {

    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();

  }

  ngOnInit() {
  }

  async passwort() {
    const alert = await this.alertCtrl.create({
      header: 'Passwort vergessen',
      subHeader: this.user.email,
      message: 'Zum zurücksetzen deines Passworts wird dir ein Link an die oben stehende E-Mail Adresse zugeschickt !',
      /*inputs: [

        {
          label: 'hallo',
          name: 'email',
          placeholder: this.user.email,
          type: 'text'

        },

      ],*/
      buttons: [{

        text: 'Abbrechen',
        role: 'cancel'

      }, {

        text: 'Weiter',
        handler: () => {
          this.weiter();
          //this.resetPassword();

          var auth = firebase.auth();
          var emailAdress = this.user.email;
          return auth.sendPasswordResetEmail(emailAdress)
            .then(() => console.log("email sent"))
            .catch((error) => console.log(error))

        }
      }]

    });

    await alert.present();

  }

  async weiter() {

    const toast = await this.toastController.create({
      message: 'Es wurde ein Link zur Passwortänderung an deine E-Mail-Adresse versendet.',
      duration: 2000,
      color: "dark"
    });
    await toast.present();

  }

}




