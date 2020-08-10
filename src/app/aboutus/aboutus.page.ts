import { Component, OnInit } from '@angular/core';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  constructor(
    private iab: InAppBrowser
  ) { }

  ngOnInit() {
  }

  /** opens the website of OhmBike */
  goDetails() {

    this.iab.create('https://www.ohmbike.de/');

  }
}
