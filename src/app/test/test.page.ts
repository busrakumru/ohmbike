import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  segment = 'aktivitaet';


  data: any;
  test = [];


  constructor(private router: Router,
    public route: ActivatedRoute,
    public afs: AngularFirestore) { 

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    });
  }

  async ngOnInit() {

    

    this.test = await this.initializeItems();

  }

  async initializeItems(): Promise<any> {
    const test = await this.afs.collection('test').valueChanges().pipe(first()).toPromise();
    return test;
  
  
  }
  
  async filtern(evt) {
  
    this.test = await this.initializeItems();
    const suche = evt.srcElement.value;
  
    if (!suche) {
  
      return;
    }
    this.test = this.test.filter(currentFriend => {
  
      if (currentFriend.name && suche) {
  
        return (currentFriend.name.toLowerCase().indexOf(suche.toLowerCase()) > -1 || currentFriend.nachname.toLowerCase().indexOf(suche.toLowerCase()) > -1);
      }
    })
  
  
  }
  

  addfriend(){
  
    let navigationExtras: NavigationExtras = {
      queryParams: {
  
        special: JSON.stringify(this.data)
      }
    }
  
    this.router.navigate(['tabs/tab4'], navigationExtras);
  
  
    
  }

  removeData(data){

    this.afs.doc(`test/`+data).delete().then(nav =>{
  
      this.router.navigate(['/tabs/tab4']);
  
    });
  
  
  }
}
