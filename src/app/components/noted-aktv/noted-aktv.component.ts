import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-noted-aktv',
  templateUrl: './noted-aktv.component.html',
  styleUrls: ['./noted-aktv.component.scss'],
})
export class NotedAktvComponent implements OnInit {

  ohmbikeEvent: any[] = [];
  noted: any;

  constructor(
    private aroute: ActivatedRoute,
    private router: Router,
  ) {

    /** gets the data from the noted events */
    this.aroute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.noted = JSON.parse(params.special);
      }
      console.log("got data !");
    });
  }

  /** navigates to the details page */
  goDetail(noted) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(noted),
      }
    };
    console.log("data has been sent");
    this.router.navigate(['detailsob'], navigationExtras);
  }

  ngOnInit() { }

}