import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { WDetailComponent } from '../components/w-detail/w-detail.component';

@Component({
  selector: 'app-wettbewerb',
  templateUrl: './wettbewerb.page.html',
  styleUrls: ['./wettbewerb.page.scss'],
})

export class WettbewerbPage implements OnInit {

  wettbewerbe = [

    {

      name: 'Fahrrad-Marathon',
      beginn: '17.05.2020 - 15:00 Uhr',
      ende: '18:00 Uhr',
      start: 'Berlin Zoologischer Garten',
      ziel: 'Potsdamer Platz',
      strecke: '3,6km',
      hinweise: 'Nehme an einer kurzen Strecke teil und gewinne tolle Preise ! '

    },
    {

      name: 'Quer durch Berlin',
      beginn: '20.07.2020 - 13:00 Uhr',
      ende: '14:00 Uhr',
      start: 'Tierpark Berlin',
      ziel: 'Gedenkstätte Berlinder Mauer',
      strecke: '11,2km',
      hinweise: 'Es wird ein warmer Tag. Denke daran, genug Wasser mitzunehmen ! :) '


    }

  ];


  constructor(
    private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async goDetail(wettbewerb) {


    const modal = await this.modalCtrl.create({

      component: WDetailComponent,
      cssClass: 'my-custom-class',

      componentProps: { 
        name: wettbewerb.name,
        beginn: wettbewerb.beginn, 
        ende: wettbewerb.ende, 
        start: wettbewerb.start, 
        ziel: wettbewerb.ziel, 
        strecke: wettbewerb.strecke,
        hinweise: wettbewerb.hinweise 
      },


      swipeToClose: true,
    });

    return await modal.present();


  }

}
