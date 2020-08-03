import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { WDetailComponent } from '../w-detail/w-detail.component';

@Component({
  selector: 'app-offene-aktv',
  templateUrl: './offene-aktv.component.html',
  styleUrls: ['./offene-aktv.component.scss'],
})
export class OffeneAktvComponent implements OnInit {

  data: any;
  beginn: any;
  ende: any;
  start: any;
  ziel: any;
  strecke: any;
  hinweise: any;



  constructor(
    private route: ActivatedRoute,
    //private router: Router,
    //private alertController: AlertController,
    private modalCtrl: ModalController) { 

      this.route.queryParams.subscribe(params => {

        console.log('params: ', params);
        if (params && params.specialName) {
  
          this.data = JSON.parse(params.specialName);
          this.beginn = JSON.parse(params.specialDetailBeginn);
          this.ende = JSON.parse(params.specialDetailEnde);
          this.start = JSON.parse(params.specialDetailStart);
          this.ziel = JSON.parse(params.specialDetailZiel);
          this.strecke = JSON.parse(params.specialDetailStrecke);
          this.hinweise = JSON.parse(params.specialDetailHinweise);

        }
  
      });
    }

   async goDetail(){

    const modal = await this.modalCtrl.create({

      component: WDetailComponent,
      cssClass: 'my-custom-class',

      componentProps: { name: this.data, 
                        beginn: this.beginn, 
                        ende: this.ende, 
                        start: this.start,
                        ziel: this.ziel,
                        strecke: this.strecke,
                        hinweise: this.hinweise ,
                      },


      swipeToClose: true,
    });

    return await modal.present();


    }

  ngOnInit() {}
 
}
