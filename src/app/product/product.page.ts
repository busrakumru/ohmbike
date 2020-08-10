import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  
  data:any;

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

   /** adds the scanned product to the profile  */
   product(data){

    let navigationExtras: NavigationExtras = {
      queryParams: {special: JSON.stringify(data)}};
      
      this.afs.collection(`vehicles`).add({
        data
      })  
    this.router.navigate(['/tabs/tab4'], navigationExtras).then(() => {
    });

  
  }
  ngOnInit() {
  }

}
