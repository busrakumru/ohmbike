import { Component, LOCALE_ID, ViewChild, OnInit, Inject, } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular'
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { CalendarComponent } from 'ionic2-calendar';
import { NavigationExtras, Router } from '@angular/router';

import * as moment from 'moment';
import * as firebase from 'firebase';
import { TranslateService } from '@ngx-translate/core';


import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;

  eventSource: any[] = [];
  viewTitle: string;
  showAddEvent: boolean;

  newEvent = {
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    startplace: '',
    endplace: ''
  };

  minDate = new Date().toISOString();


  calendar = {

    startingDayMonth: "1",
    formatDayHeader: 'EEEEEE',
    formatDay: 'dd',
    mode: 'month',
    currentDate: new Date(),
    queryMode: 'remote',

  };

  constructor(
    public afs: AngularFirestore,
    public db: AngularFireDatabase,
    public modalController: ModalController,
    private alertCtrl: AlertController,
    private router: Router,
    private translate: TranslateService,

    private platform: Platform) {

    this.loadEvent();


  }

  ngOnInit() {

  }

  showHideForm() {

    this.showAddEvent = !this.showAddEvent;

    this.newEvent = {
      title: '',
      description: '',
      startplace: '',
      endplace: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

  /** this function will refresh the page by pulling down */
  refresh(event) {

    this.loadEvent();
    setTimeout(() => {

      event.target.complete();
    }, 2000);
  }

  /** the created event will be pushed in the realtime database */
  addEvent() {

    var ref = firebase.database().ref('Events').push();
    var newKey = ref.key;

    let events = {

      id: newKey,
      title: this.newEvent.title,
      startTime: this.newEvent.startTime,
      endTime: this.newEvent.endTime,
      description: this.newEvent.description,
      startplace: this.newEvent.startplace,
      endplace: this.newEvent.endplace,


    }

    this.db.list('/Events').push(events);

    this.showHideForm();

    console.log('Event: ' + JSON.stringify(this.newEvent));
  }


  /** this function loads all the events from the database */
  loadEvent() {
    this.db.list('Events').snapshotChanges(['child_added']).subscribe(actions => {
      this.eventSource = [];
      actions.forEach(action => {
        console.log('Title: ' + action.payload.exportVal().title);
        let event = {
          id: action.payload.exportVal().id,
          title: action.payload.exportVal().title,
          startTime: new Date(action.payload.exportVal().startTime),
          endTime: new Date(action.payload.exportVal().endTime),
          description: action.payload.exportVal().description,
          startplace: action.payload.exportVal().startplace,
          endplace: action.payload.exportVal().endplace,
        }

        this.eventSource.push(event);

        this.myCalendar.loadEvents();
      });


    });
  }

  /** function for sliding back in the calendar */
  async back() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  /** function for sliding forward in the calendar */
  async next() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  async onViewTitleChanged(title: string) {
    this.viewTitle = title;
  }

  /** this function opens an alert if the created event is selected */
  async onEventSelected(newEvent) {

    console.log('Event: ' + JSON.stringify(newEvent));
    const start = moment(newEvent.startTime).format('LL');
    const end = moment(newEvent.endTime).format('LL');
    const itemsRef = this.db.list('Events');


    const alert = await this.alertCtrl.create({
      header: newEvent.title,
      message: `
        <p> Beginn ${start} <br> ${newEvent.startplace}</p> 
        <p>Ende ${end} <br> ${newEvent.endplace}</p>
        <p > ${newEvent.description}</p>
        
      `,
      buttons: [
        {
          text: this.translate.instant('TAB1.btn-delete'),
          handler: () => {

            this.db.list('Events/').remove()

          }
        }, {
          text: this.translate.instant('TAB1.btn-edit'),
          handler: () => {


          }

        }, {
          text: this.translate.instant('TAB1.btn-share'),
          handler: () => {

            const start = moment(newEvent.startTime).format('LL - HH:mm');
            const end = moment(newEvent.endTime).format('LL - HH:mm');

            let navigationExtras: NavigationExtras = {
              queryParams: {

                special: JSON.stringify(newEvent.title),
                specialStartTime: JSON.stringify(start),
                specialEndTime: JSON.stringify(end),
                specialStartPlace: JSON.stringify(newEvent.startplace),
                specialEndPlace: JSON.stringify(newEvent.endplace),
                specialDescription: JSON.stringify(newEvent.description),

              }
            };
            this.router.navigate(['tabs/tab3'], navigationExtras).then(() => {
              console.log('going to produkt' + JSON.stringify(navigationExtras));
            })


            this.db.list('Events/').valueChanges().subscribe(data => {
              console.log("bye" + newEvent)
            })

          }
        }]

    })
    await alert.present();
  }


  items: any;

}




