import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-product2',
  templateUrl: './product2.page.html',
  styleUrls: ['./product2.page.scss'],
})
export class Product2Page implements OnInit {
  
  data:any;
  dataImg:any;

  constructor(
    private router: Router,
    public aroute: ActivatedRoute,
    private afs: AngularFirestore) { 

    /** gets the scanned data */
    this.aroute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
        this.dataImg = JSON.parse(params.specialImg);

      }
    });
  }

  ngOnInit() {
  }

  /** adds the scanned product to the profile but navigates to the login page so the user can log in */
  product(data){

    let navigationExtras: NavigationExtras = {
      queryParams: {special: JSON.stringify(data)}};
      
      this.afs.collection(`vehicles`).add({
        data
      })  
    this.router.navigate(['/login'], navigationExtras).then(() => {
    });
  }
}
