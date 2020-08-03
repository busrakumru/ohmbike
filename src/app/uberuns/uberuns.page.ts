import { Component, OnInit } from '@angular/core';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-uberuns',
  templateUrl: './uberuns.page.html',
  styleUrls: ['./uberuns.page.scss'],
})
export class UberunsPage implements OnInit {

  constructor(
    private iab: InAppBrowser
  ) { }

  ngOnInit() {
  }

  goDetails(){

    this.iab.create('https://www.ohmbike.de/');

  }
}
