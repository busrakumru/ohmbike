import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase';


@Component({
  selector: 'app-popovercomponent',
  templateUrl: './popovercomponent.page.html',
  styleUrls: ['./popovercomponent.page.scss'],
})
export class PopovercomponentPage implements OnInit {

  constructor(public popoverController: PopoverController,
              private router: Router,
              public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async einstellungen(){

    this.router.navigate(['einstellungen']);
    this.popoverController.dismiss();

  }

  closePopover(){

    this.popoverController.dismiss();

  }

  async logOut(){

    firebase.auth().signOut().then(() => {
      this.router.navigate(['/login']);
    });
    this.popoverController.dismiss();
    console.log('abgemeldet');
    

  }
}


