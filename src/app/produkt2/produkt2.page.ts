import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-produkt2',
  templateUrl: './produkt2.page.html',
  styleUrls: ['./produkt2.page.scss'],
})
export class Produkt2Page implements OnInit {
  
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

  ngOnInit() {
  }

  produkt(data){

    let navigationExtras: NavigationExtras = {
      queryParams: {special: JSON.stringify(data)}};
      
      this.afs.collection(`fahrzeuge`).add({
        data
      })  
    this.router.navigate(['/login'], navigationExtras).then(() => {
    });

  }
}
