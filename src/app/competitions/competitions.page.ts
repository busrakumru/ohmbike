import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CDetailComponent } from '../components/c-detail/c-detail.component';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.page.html',
  styleUrls: ['./competitions.page.scss'],
})

export class CompetitionsPage implements OnInit {

  /** dummy competitions */
  competitions = [

    {

      name: 'Fahrrad-Marathon',
      beginning: '17.05.2020 - 15:00 Uhr',
      end: '18:00 Uhr',
      from: 'Berlin Zoologischer Garten',
      to: 'Potsdamer Platz',
      length: '3,6km',
      notes: 'Nehme an einer kurzen Strecke teil und gewinne tolle Preise ! '

    },
    {

      name: 'Quer durch Berlin',
      beginning: '20.07.2020 - 13:00 Uhr',
      end: '14:00 Uhr',
      from: 'Tierpark Berlin',
      to: 'Gedenkstätte Berlinder Mauer',
      length: '11,2km',
      notes: 'Es wird ein warmer Tag. Denke daran, genug Wasser mitzunehmen ! :) '


    }

  ];


  constructor(
    private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  /** opens a modal page for the selected competition */
  async goDetail(competition) {


    const modal = await this.modalCtrl.create({

      component: CDetailComponent,
      cssClass: 'my-custom-class',

      componentProps: { 
        name: competition.name,
        beginning: competition.beginning, 
        end: competition.end, 
        from: competition.from, 
        to: competition.to, 
        length: competition.length,
        notes: competition.notes
      },


      swipeToClose: true,
    });

    return await modal.present();


  }

}
