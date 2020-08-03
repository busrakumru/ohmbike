import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { PopoverController, ModalController, AlertController } from '@ionic/angular';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';
import { ProfilbearbeitenPage } from '../modals/profilbearbeiten/profilbearbeiten.page';
//import { FahrzeugComponent } from '../components/fahrzeug/fahrzeug.component';
//import { stringify } from 'querystring';
import { AbgeschlosseneAktvComponent } from '../components/abgeschlossene-aktv/abgeschlossene-aktv.component';
//import { FriendComponent } from '../components/friend/friend.component';
import { OffeneAktvComponent } from '../components/offene-aktv/offene-aktv.component';
import { CardOBComponent } from '../components/card-ob/card-ob.component';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
//import { Observable } from 'rxjs';

//import { GemerkteAktvComponent } from '../components/gemerkte-aktv/gemerkte-aktv.component';

//import { ProfilvonanderenPage } from '../profilvonanderen/profilvonanderen.page';

import * as firebase from 'firebase';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page implements OnInit {


  //list: FriendComponent[];
  segment = 'aktivitaet';


  fahrzeuge: any[] = [];
  testusers = [];
  users: any[] = [];

  data: any;
  gemerkt: any;
  testuser: any;


  activities: OffeneAktvComponent[];
  ob: CardOBComponent[];


  /*profile = 
  {

    name: 'Marie',
    nachname: 'Müller' 

  }*/

  // user: any = {};
  //currentuser = firebase.auth().currentUser;



  //test = [];

  //qrprodukt:any;



  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(
    private popoverController: PopoverController,
    private modalController: ModalController,
    public alertController: AlertController,
    public router: Router,
    //private userservice: UserService,
    public afs: AngularFirestore,
    public aroute: ActivatedRoute,
  ) {

    /*this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.testuser = JSON.parse(params.special);
      }
      
    });*/

    this.aroute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }

    });

    /*this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.qrprodukt = JSON.parse(params.special);
      }
      
    });*/
    this.getDocuments();

    this.initializer();

  }

  initializer() {

    this.activities = [

      name
    ];

  }

  async ngOnInit() {

    /* this.afs.collection(`testusers`).snapshotChanges().subscribe(collectionItems => {
 
       this.testusers = [];
       collectionItems.forEach(a => {
         let testuser: any = a.payload.doc.data();
         testuser.id = a.payload.doc.id;
         this.testusers.push(testuser);
 
         
       })
     })*/

    this.testusers = await this.initializeItems();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.firestore().doc(`/users/${user.uid}`).get().then(userProfileSnapshot => {
          console.log(userProfileSnapshot.data().uid);

        });
      }
    });
  }

  async initializeItems(): Promise<any> {
    const testusers = await this.afs.collection('testusers').valueChanges().pipe(first()).toPromise();
    return testusers;


  }

  async filtern(evt) {

    this.testusers = await this.initializeItems();
    const suche = evt.srcElement.value;

    if (!suche) {

      return;
    }
    this.testusers = this.testusers.filter(currentFriend => {

      if (currentFriend.name && suche) {

        return (currentFriend.name.toLowerCase().indexOf(suche.toLowerCase()) > -1 || currentFriend.nachname.toLowerCase().indexOf(suche.toLowerCase()) > -1);
      }
    })


  }

  async presentPopover(event) {

    const popover = await this.popoverController.create({

      component: PopovercomponentPage,
      event

    });

    return await popover.present();


  }

  edit() {

    this.modalController.create({

      component: ProfilbearbeitenPage,
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

  async abgeschlossen() {

    const modal = await this.modalController.create({

      component: AbgeschlosseneAktvComponent,
      cssClass: 'my-custom-class',



      swipeToClose: true,
    });

    return await modal.present();

  }

 

  async deleteActivities(offen) {

    let alert = await this.alertController.create({
      header: 'Achtung',
      message: 'Du bist dabei, nicht mehr an dem Wettbewerb teilzunehmen !',
      buttons: [
        {
          text: 'nicht mehr Teilnehmen',
          handler: () => {
            console.log('Freund wurde gelöscht');
            this.activities.splice(offen, 1);
          }
        },
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => {
            console.log('Abgebrochen');
          }

        }
      ]
    });
    await alert.present();

  }



  goFreund(testuser) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(testuser)
      }
    };
    this.router.navigate(['profilvonanderen'], navigationExtras);
  }

  goFreundData(data) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(data)
      }
    };
    this.router.navigate(['test'], navigationExtras);
  }


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

}
