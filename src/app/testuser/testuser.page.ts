import { Component, OnInit,ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import {  AlertController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-testuser',
  templateUrl: './testuser.page.html',
  styleUrls: ['./testuser.page.scss'],
})

export class TestuserPage implements OnInit {

  segment = 'activity';

  data: any;
  testuser:any;

  term = '';

  /** dummy friends of the testusers */
  test = [{

    name: 'Karl',
    nachname: 'Schmidt'
  },
  {
    name: 'Sabine',
    nachname: 'Horst'
  },
  {
    name: 'Helmut',
    nachname: 'Klein'
  },
  {
    name: 'Patrick',
    nachname: 'Krüger'
  }];


/** this is the testusers array from tab4 */
  tab4array: Array<object>;


@ViewChild(MatAccordion) accordion: MatAccordion;

constructor(
  
   private aroute: ActivatedRoute,
   public router: Router,
   public afs: AngularFirestore,
   public alertCtrl: AlertController,
   private translate: TranslateService

   ) { 

/** gets the testusers array from tab4 */
  this.aroute.queryParams.subscribe(params => {
    if (params && params.special) {
      this.testuser = JSON.parse(params.special);
      this.tab4array = JSON.parse(params.specialArray);
      console.log("array: ", this.tab4array)


    }
  });

}

async ngOnInit() {}


/** navigates to the friends profile */
goFriend(testId) {

  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(testId),
    }
  };
  this.router.navigate(['test'], navigationExtras);
}

/** deletes the selected user from the list and sends the array back to tab4 */
async deleteTestuser(testuser) {

  let alert = await this.alertCtrl.create({
    header: this.translate.instant('TESTUSER.alert-header'),
    message: this.translate.instant('TESTUSER.alert-message'),
    buttons: [
      {
        text: this.translate.instant('TESTUSER.alert-btn-unfollow'),
        handler: () => {
          console.log('unfollowed friend');
          this.tab4array.splice(testuser, 1);

          let navigationExtras: NavigationExtras = {
            queryParams: {
              special: JSON.stringify(this.tab4array)
            }
          };
       
          this.router.navigate(['/tabs/tab4'],navigationExtras);

          console.log("array:", this.tab4array)

        }
      },
      {
        text: this.translate.instant('TESTUSER.alert-btn-cancel'),
        role: 'cancel',
        handler: () => {
          console.log('Canceled');
        }

      }
    ]
  });
  await alert.present();

}

}
