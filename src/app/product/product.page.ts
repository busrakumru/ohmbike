import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  
  data:any;
  vehicle = {
    title: ''
  };

  constructor(
    private router: Router,
    public aroute: ActivatedRoute,
    private afs: AngularFirestore) {

    /** gets the scanned data */
    this.aroute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    });
   }

   ngOnInit() {}

   /** adds the scanned product to the 'vehicles' collection in firestore  */
   product(data){

      this.afs.collection(`vehicles`).add({
        data, 
        "title": this.vehicle.title,
      })  
    this.router.navigate(['/tabs/tab4'])
  }
}