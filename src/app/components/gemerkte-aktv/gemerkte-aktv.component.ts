import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
//import { AlertController, ModalController } from '@ionic/angular';
//import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-gemerkte-aktv',
  templateUrl: './gemerkte-aktv.component.html',
  styleUrls: ['./gemerkte-aktv.component.scss'],
})
export class GemerkteAktvComponent implements OnInit {

  
  ohmbikeEvent: any [] = [];

  gemerkt:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    //private alertController: AlertController,
    //private modalCtrl: ModalController,
    //private afs: AngularFirestore
    ) { 

      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.gemerkt = JSON.parse(params.special);

        }
        console.log("Daten bekommen !");
      });
    }


    goDetail(gemerkt){

      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(gemerkt),

        }
      };      
      console.log("Daten wurden weitergeleitet!");
  
      
      this.router.navigate(['detailsob'], navigationExtras);
  

    }
    
  ngOnInit() {

  }

}
