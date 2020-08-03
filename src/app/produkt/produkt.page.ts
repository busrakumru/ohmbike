import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-produkt',
  templateUrl: './produkt.page.html',
  styleUrls: ['./produkt.page.scss'],
})
export class ProduktPage implements OnInit {
  
  data:any;

  constructor(
    private router: Router,
    public aroute: ActivatedRoute,
    private afs: AngularFirestore) {

    this.aroute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    });
    
   }

   produkt(data){

    let navigationExtras: NavigationExtras = {
      queryParams: {special: JSON.stringify(data)}};
      
      this.afs.collection(`fahrzeuge`).add({
        data
      })  
    this.router.navigate(['/tabs/tab4'], navigationExtras).then(() => {
    });

  
  }
  ngOnInit() {
  }

}
