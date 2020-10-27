import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import * as firebase from 'firebase';

interface User {
  email?: string;
  password?: string;
  displayName?: string;
  nachname?: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {

  user: User = {
    email: '',
    password: '',
    displayName: '',
    nachname: '',
  };

  hide = true;
  hidepw = true;
  registrationForm: FormGroup;
  submitted = false;

  constructor(
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    public afs: AngularFirestoreModule,
    public router: Router
  ) { }

  /** gets the inputs */
  get displayName() {
    return this.registrationForm.get("displayName");
  }

  get nachname() {
    return this.registrationForm.get("nachname");
  }

  get email() {
    return this.registrationForm.get("email");
  }

  get email2() {
    return this.registrationForm.get("email2");
  }

  get password() {
    return this.registrationForm.get("password");
  }

  get password2() {
    return this.registrationForm.get("password2");
  }

  get checkbox() {
    return this.registrationForm.get("checkbox");
  }

  get formctrl() {
    return this.registrationForm.controls;
  }

  ngOnInit() {

    /** Validator for the registration form */
    this.registrationForm = this.formBuilder.group({
      displayName: ["", [Validators.required, Validators.minLength(2)]],
      nachname: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required,
      Validators.pattern("^[a-zA-z0-9._%-]+@[a-zA-z0-9]+.[a-zA-z]{2,4}$")]],
      email2: ["", [Validators.required]],
      checkbox: [false, [Validators.requiredTrue]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      password2: ["", [Validators.required]],
    }, {
      validator: this.confirmPasswordMatch('password', 'password2')
    });
  }

  /** creates the account and pushs it to firestore */
  async createAccount() {

    this.submitted = true;
    try {
      const user = await this.afAuth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password);
      console.log(user);
      var currentuser = firebase.auth().currentUser;
      var name, email, uid;
      if (currentuser != null) {
        name = currentuser.displayName;
        email = currentuser.email;
        uid = currentuser.uid;
        console.dir(currentuser);
      }

      firebase.firestore().collection("users").doc(uid).set({
        "user_name": this.user.displayName,
        "user_nachname": this.user.nachname
      })

      const toast = await this.toastController.create({
        message: 'Du hast jetzt ein Konto! Dir wurde ein Link zur Verifizierung deiner E-Mail Adresse zugeschickt. Bitte bestätige dies!',
        duration: 4000,
        color: 'dark',
      });
      toast.present();
      this.router.navigate(['login']);

    } catch (err) {
      console.dir(err)

      /** generates an error if the entered email adress is already in use */
      if (err.code === "auth/email-already-in-use") {
        const alert = await this.alertCtrl.create({
          header: 'Information',
          message: 'Diese E-Mail Adresse wird bereits verwendet ! Bitte gib eine andere E-Mail Adresse ein.',
          buttons: ['OK']
        });
        await alert.present();
      }
    }
  }

  /** confirms the password */
  confirmPasswordMatch(controlName: string, matchingControlName: string) {

    return (formgroup: FormGroup) => {
      const control = formgroup.controls[controlName];
      const matchingControl = formgroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  /** opens the privacy in the OhmBike website */
  privacy() {
    window.open('https://www.ohmbike.de/pages/datenschutz', '_blank', 'location=yes');
  }
}