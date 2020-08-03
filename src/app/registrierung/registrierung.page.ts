import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { ModalController, NavController, ToastController, AlertController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../services/user.service';
import * as firebase from 'firebase';
import { AngularFirestoreModule } from '@angular/fire/firestore';

interface User {
  email?: string;
  password?: string;
  name?: string;
  nachname?: string;
  
}

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.page.html',
  styleUrls: ['./registrierung.page.scss'],
})


export class RegistrierungPage implements OnInit {

  user: User = {

    email: '',
    password: '',
    name:'',
    nachname: '',

  };


  hide = true;
  hidepw = true;

  //userInfo: any = {};
  //isUserLoggedIn: any = false;

  registrationForm: FormGroup;
  submitted = false;

  
  constructor(
    //private router: Router,
    //public userService: UserService,
    //public keyboard: Keyboard,
    //private modalController: ModalController,
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    public afs: AngularFirestoreModule

    ) { }

  get name() {
    return this.registrationForm.get("name");
  }

  get nachname() {
    return this.registrationForm.get("nachname");
  }

  get email() {
    return this.registrationForm.get("email");
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


    this.registrationForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      nachname: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required,
      Validators.pattern("^[a-zA-z0-9._%-]+@[a-zA-z0-9]+.[a-zA-z]{2,4}$")]],
      checkbox: [false, [Validators.requiredTrue]],


      password: ["", [Validators.required, Validators.minLength(8)]],
      password2: ["", [Validators.required]],

    }, {
      validator: this.confirmPasswordMatch('password', 'password2')
    });


  }

  async createAccount() {

    try{

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

        "user_name" : this.user.name,
        "user_nachname" : this.user.nachname

      })

      const toast = await this.toastController.create({
        message: 'Du hast jetzt ein Konto! Bitte melde dich mit diesen Daten an!',
        duration: 2000,
        color: 'dark',
        
      });
      toast.present();

    }catch(err){
      console.dir(err)
      if(err.code === "auth/email-already-in-use"){

        const alert = await this.alertCtrl.create({
          header: 'Information',
          message: 'Diese E-Mail Adresse wird bereits verwendet ! Bitte gib eine andere E-Mail Adresse ein.',
          buttons: ['OK']
        });
    
        await alert.present();

      }

    }
    
  }


  /*async submit() {
   this.submitted = true;

    const toast = await this.toastController.create({
      message: 'Du hast jetzt ein Konto! Bitte melde dich mit diesen Daten an!',
      duration: 2000,
      color: 'dark',
    });
    toast.present();
  }*/


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
}