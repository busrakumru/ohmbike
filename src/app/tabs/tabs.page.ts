import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor() {}

  ngOnInit() {

    let content = document.querySelector('ion-content');
    content.scrollEvents = true;
    content.addEventListener('ionScrollStart', () => {
          document.querySelector('ion-tab-bar').style.display = 'none';
    });
    content.addEventListener('ionScrollEnd', () => {
          document.querySelector('ion-tab-bar').style.display = 'flex';
    });
  }

  showLoader: boolean;
  
    showProgressBar() {
      this.showLoader = true;
    }
  
    hideProgressBar() {
      this.showLoader = false;
    }


}
