import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

import * as firebase from 'firebase';




@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss'],
})
export class FriendComponent {

/*  friends: any[];


  data: any;



  constructor(private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController) {

    this.getFriendData();

    this.route.queryParams.subscribe(params => {

      console.log('params: ', params);
      if (params && params.special) {

        this.data = JSON.parse(params.special);
      }

    });
  }

  goFriend() {

    this.router.navigate(['profilvonanderen']);
  }

  getFriendData(){

    firebase.firestore().collection("friends").get().then((queryDocumentSnapshot) => {

      console.log(queryDocumentSnapshot.docs);

      this.friends = queryDocumentSnapshot.docs;

    }).catch((err) => {

      console.log(err);
    })
  

  }

  ngOnInit() { }*/

}
