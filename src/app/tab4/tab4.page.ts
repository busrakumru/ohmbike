import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { PopoverController, ModalController, AlertController } from '@ionic/angular';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';
import { EditprofilePage } from '../modals/editprofile/editprofile.page';
import { CompletedAktvComponent } from '../components/completed-aktv/completed-aktv.component';
import { OpenAktvComponent } from '../components/open-aktv/open-aktv.component';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { TranslateService } from '@ngx-translate/core';
import { NotedAktvComponent } from '../components/noted-aktv/noted-aktv.component';

import * as firebase from 'firebase';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page implements OnInit {


  segment = 'aktivitaet';

  //fahrzeuge: any[] = [];
  vehicles: any[] = [];
  users: any[] = [];

  //gemerkt: any;
  testuser: any;
  data: any;

  notedActivities:  NotedAktvComponent [];
  openActivities: OpenAktvComponent[] ;

  term = '';
 
  /** dummy friends */
  testusers = [{

    name: 'Marie',
    nachname: 'Müller',
    image: 'assets/profile/profil.jpg'
  },
  {
    name: 'Kai',
    nachname: 'Baum',
    image: 'assets/profile/profil2.jpg'

  },
  {
    name: 'Kelly',
    nachname: 'Tänzer',
    image: 'assets/profile/profil3.jpg'

  },
  {
    name: 'Max',
    nachname: 'Krüger',
    image: 'assets/profile/testuser.jpg'

  },
  {
    name: 'Robin',
    nachname: 'Schulz',
    image: 'assets/profile/profil4.jpg'

  },
  {
    name: 'Paul',
    nachname: 'Hermann',
    image: 'assets/profile/profil5.jpg'

  },
  {
    name: 'Phillip',
    nachname: 'Baum',
    image: 'assets/profile/profil6.jpg'

  },
  {
    name: 'Telly',
    nachname: 'Karsten',
    image: 'assets/profile/profil7.jpg'

  }];

  initializer() {

    this.openActivities = [

      name,
    
    ];

    this.notedActivities =[
     
       name       
    ]

  }


  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(
    private popoverController: PopoverController,
    private modalController: ModalController,
    public alertCtrl: AlertController,
    public router: Router,
    public afs: AngularFirestore,
    public aroute: ActivatedRoute,
    public afAuth: AngularFireAuth,
    private translate: TranslateService,
  ) {

    this.getUser();

    this.initializer();

    this.getDocuments();



    /** gets data from dummy test */
    this.aroute.queryParams.subscribe(params => {
      if (params && params.specialData) {
        this.data = JSON.parse(params.specialData);
        console.log("got data !" , this.data)
      }

      

    });

    /** gets data from dummy testuser */
    this.aroute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.testusers = JSON.parse(params.special);
        console.log("array:", this.testusers)

      }
      
    });

  }
  
  /** this function will refresh the page by pulling down */

  refresh(event) {

  
    setTimeout(() => {

      event.target.complete();
    }, 2000);
  }

  async ngOnInit() {}

  
/** opens the popover */
  async presentPopover(event) {

    const popover = await this.popoverController.create({

      component: PopovercomponentPage,
      event

    });

    return await popover.present();


  }

/** opens the edip profile modal */
  edit() {

    this.modalController.create({

      component: EditprofilePage,
      cssClass: 'edit-modal-class',
      componentProps: this.users

    }).then(modalres => {

      modalres.present();

      modalres.onDidDismiss().then(res => {

        if (res.data != null) {

          this.users = res.data;
        }

      })
    })
  }

  /** opens the details page of the completed activity */
  async completed() {

    const modal = await this.modalController.create({

      component: CompletedAktvComponent,
      cssClass: 'my-custom-class',



      swipeToClose: true,
    });

    return await modal.present();

  }


/** deletes the selected activity from the list */
  async deleteActivities(offen) {

    let alert = await this.alertCtrl.create({
      header: this.translate.instant('ALERT-OPEN-ACTIVITY.alert-header'),
      message: this.translate.instant('ALERT-OPEN-ACTIVITY.alert-message'),
      buttons: [
        {
          text: this.translate.instant('ALERT-OPEN-ACTIVITY.alert-btn-not-participate'),
          handler: () => {
            console.log('Freund wurde gelöscht');
            this.openActivities.splice(offen, 1);
          }
        },
        {
          text: this.translate.instant('ALERT-OPEN-ACTIVITY.alert-btn-cancel'),
          role: 'cancel',
          handler: () => {
            console.log('canceled');
          }

        }
      ]
    });
    await alert.present();

  }


/** navigates to the friends profile */
  goFriend(testuser) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(testuser),
        specialArray: JSON.stringify(this.testusers)
      }
    };
    this.router.navigate(['testuser'], navigationExtras);
  }

  /** navigates to the friends profile */
  goFriendData(data) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(data),
        
      }
    };
    this.router.navigate(['test'], navigationExtras);
  }

  /** gets all users from firestore */
  getDocuments() {

    var user = firebase.auth().currentUser;
    var name, email, uid;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      uid = user.uid;
      console.log(user);
    }
    firebase.firestore().collection("users").get().then((queryDocumentSnapshot) => {

      console.log(queryDocumentSnapshot.docs);

      this.users = queryDocumentSnapshot.docs;

    }).catch((err) => {

      console.log(err);
    })
  }

  /** deletes the selected user from the list */
  async deleteTestuser(friend) {

    let alert = await this.alertCtrl.create({
      header: this.translate.instant('TESTUSER.alert-header'),
      message: this.translate.instant('TESTUSER.alert-message'),
      buttons: [
        {
          text: this.translate.instant('TESTUSER.alert-btn-unfollow'),
          handler: () => {
            console.log('Freund wurde entfolgt');
            this.testusers.splice(friend, 1);
          }
        },
        {
          text: this.translate.instant('TESTUSER.alert-btn-cancel'),
          role: 'cancel',
          handler: () => {
            console.log('Abgebrochen');
          }

        }
      ]
    });
    await alert.present();


  }

  /** this function is checking wheter the user is logged in or not. If the user is logged in, the application will open the root page "tab4-profile".
   * If not, the application will navigate to the login page. 
   */
  getUser() {

    var user = firebase.auth().currentUser;
    var name, email, uid;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      uid = user.uid;
      console.log(user);
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.firestore().doc(`/users/${user.uid}`).get().then(userProfileSnapshot => {
          console.log(userProfileSnapshot.data().uid);
        });
        console.log("User is signed in.");

        this.router.navigate(['tabs/tab4']);
      } else {

        this.router.navigate(['login']);
        console.log("No user is signed in.");

      }
    });
  }

  
}
