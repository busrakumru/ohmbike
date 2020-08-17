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

  constructor(
    public popoverController: PopoverController,
    private router: Router,
    public afAuth: AngularFireAuth
    ) {}

  ngOnInit() {}

  /** closes the popover */
  closePopover() {
    this.popoverController.dismiss();
  }

  /** navigates to the settings page  */
  async settings() {
    this.router.navigate(['settings']);
    this.popoverController.dismiss();
  }

  /** the user will be logged out */
  async logOut() {

    firebase.auth().signOut().then(() => {
      this.router.navigate(['/login']);
    });
    this.popoverController.dismiss();
    console.log('logged out');
  }
}