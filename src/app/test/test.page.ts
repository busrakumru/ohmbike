import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  segment = 'activity';
  data: any;
  term = '';

  constructor(private router: Router,
    public route: ActivatedRoute,
    public afs: AngularFirestore) {

    /** gets the data from the testuser page */
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    });
  }

  async ngOnInit() { }

  /** adds the user in the friendslist  */
  addfriend(data) {

    let navigationExtras: NavigationExtras = {
      queryParams: {

        specialData: JSON.stringify(data)
      }

    }

    this.router.navigate(['tabs/tab4'], navigationExtras);

  }
}
