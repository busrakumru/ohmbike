import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  constructor() { }

  ngOnInit() {}

  /** opens the website of OhmBike */
  goDetails() {

    window.open('https://www.ohmbike.de/pages/unsere-story', '_blank', 'location=yes');

  }
}
