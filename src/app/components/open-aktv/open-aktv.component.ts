import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { CDetailComponent } from '../c-detail/c-detail.component';

@Component({
  selector: 'app-open-aktv',
  templateUrl: './open-aktv.component.html',
  styleUrls: ['./open-aktv.component.scss'],
})
export class OpenAktvComponent implements OnInit {

  data: any;
  beginning: any;
  end: any;
  from: any;
  to: any;
  length: any;
  notes: any;
  aktv: any;
  visible = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalCtrl: ModalController,
    public alertCtrl: AlertController,
  ) {
    

    /** gets all the data from the participated events */
    this.route.queryParams.subscribe(params => {
      console.log('params: ', params);
      if (params && params.specialName) {
        this.data = JSON.parse(params.specialName);
        this.beginning = JSON.parse(params.specialDetailBeginning);
        this.end = JSON.parse(params.specialDetailEnd);
        this.from = JSON.parse(params.specialDetailFrom);
        this.to = JSON.parse(params.specialDetailTo);
        this.length = JSON.parse(params.specialDetailLength);
        this.notes = JSON.parse(params.specialDetailNotes);

      } else {

        if (params && params.specialtitle) {
          this.aktv = JSON.parse(params.specialtitle);
        }
      }
    });
  }

  ngOnInit() {}

  /** opens a modal page with the details of the event */
  async goDetail() {

    const modal = await this.modalCtrl.create({
      component: CDetailComponent,
      cssClass: 'my-custom-class',

      componentProps: {
        name: this.data,
        beginning: this.beginning,
        end: this.end,
        from: this.from,
        to: this.to,
        length: this.length,
        notes: this.notes,
        visible: true
      },
      swipeToClose: true,
    });
    return await modal.present();
  }

  goDetails(aktv) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(aktv),
        specialVisible: this.visible
      }
    };
    console.log("data has been sent !");
    this.router.navigate(['details'], navigationExtras);
  }
}