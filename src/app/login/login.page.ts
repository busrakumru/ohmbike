import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { AlertController, NavController } from '@ionic/angular'
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import * as firebase from 'firebase';


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


  /** generates the error messages of the inputs */
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return this.translate.instant('LOGIN.error-email-adress-required');

    }

    return this.email.hasError('email') ? this.translate.instant('LOGIN.error-email-adress-invalid') : '';
  }

  constructor(

    public alertCtrl: AlertController,
    public toastController: ToastController,
    public afAuth: AngularFireAuth,
    private router: Router,
    public navCtrl: NavController,
    private translate: TranslateService

  ) { }


  /** this function allows the user to login */
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

      /** generates an error if there is not such a registered user */
      if (err.code === "auth/user-not-found") {

        this.showAlert("Information", this.translate.instant('ALERTS-LOGIN.user-not-found'))

      }

      /** generates an error if the user enters a wrong password */
      if (err.code === "auth/wrong-password") {

        this.showAlert("Information", this.translate.instant('ALERTS-LOGIN.wrong-password'))

      }

      /** generates an error if the user enters an invalid email adress */
      if (err.code === "auth/invalid-email") {

        this.showAlert("Information", this.translate.instant('ALERTS-LOGIN.invalid-email'))

      }

    }
  }

  /** this is a general alert function. It takes the needed header and message from the login function */
  async showAlert(header: string, message: string) {

    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();

  }

  ngOnInit() { }

  /** this function lets the user reset his password. It will send an password-reset link to the entered email adress */
  async resetPassword() {
    const alert = await this.alertCtrl.create({
      header: this.translate.instant('ALERTS-LOGIN.forgotten-password-header'),
      subHeader: this.user.email,
      message: this.translate.instant('ALERTS-LOGIN.forgotten-password-message'),

      buttons: [{

        text: this.translate.instant('ALERTS-LOGIN.forgotten-password-btn-cancel'),
        role: 'cancel'

      }, {

        text: this.translate.instant('ALERTS-LOGIN.forgotten-password-btn-continue'),
        handler: () => {
          this.continue();

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

  /** this function generates a toast which informs the user about the password-reset link */
  async continue() {

    const toast = await this.toastController.create({
      message: this.translate.instant('ALERTS-LOGIN.forgotten-password-toast'),
      duration: 2000,
      color: "dark"
    });
    await toast.present();

  }

}




