import { Component,  LOCALE_ID,ViewChild, OnInit, Inject, } from '@angular/core';
import {ModalController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import {AlertController} from '@ionic/angular'
import {AngularFireDatabase, snapshotChanges} from '@angular/fire/database';
import {AngularFirestore} from '@angular/fire/firestore';
import { CalendarComponent } from 'ionic2-calendar';
import { NavigationExtras, Router } from '@angular/router';

import * as moment from 'moment';
import * as firebase from 'firebase';
import { TranslateService } from '@ngx-translate/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{

  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;
  
  eventSource:any[]= [];
  viewTitle: string;
  showAddEvent: boolean;
  
  newEvent = {
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    startplace:'',
    endplace:''
  };

  minDate = new Date().toISOString();  


  calendar = {
    
    startingDayMonth: "1",
    formatDayHeader:'EEEEEE',
    formatDay:'dd',
    mode: 'month',
    currentDate: new Date(),
    queryMode: 'remote',
  };

  constructor(
    public afs: AngularFirestore,
    public db: AngularFireDatabase,
    private menuCtl: MenuController,
    public modalController: ModalController,
    private alertCtrl: AlertController,
    private router: Router,
    private translate: TranslateService) {

      this.loadEvent();  

      
     
    }
  
 ngOnInit(){

 }

  openFirst() {
    this.menuCtl.enable(true, 'first');
    this.menuCtl.open('first');
  }

  showHideForm() {


    this.showAddEvent = !this.showAddEvent;

    this.newEvent = {
      title: '',
      description: '',  
      startplace:'',
      endplace:'',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

  /** this function will refresh the page by pulling down */
  refresh(event){

    this.loadEvent();
    setTimeout(() => {

      event.target.complete();
    },2000);
  }


  addEvent() {

    let events={
      
      title: this.newEvent.title,
      startTime:  this.newEvent.startTime,
      endTime: this.newEvent.endTime,
      description: this.newEvent.description,
      startplace: this.newEvent.startplace,
      endplace: this.newEvent.endplace,
    
    
    }
   
    this.db.list('/Events').push(events);
    
    this.showHideForm();

    console.log('Event: ' + JSON.stringify(this.newEvent));
  }
  

  loadEvent() {
    this.db.list('Events').snapshotChanges(['child_added']).subscribe(actions => {
      this.eventSource = [];
      actions.forEach(action => {  
        console.log('Title: ' + action.payload.exportVal().title);
        let event={title: action.payload.exportVal().title,

          startTime:  new Date(action.payload.exportVal().startTime),
          endTime: new Date(action.payload.exportVal().endTime),
          description: action.payload.exportVal().description,
          startplace: action.payload.exportVal().description,
          endplace: action.payload.exportVal().description,}

        this.eventSource.push(event);

         this.myCalendar.loadEvents();
      });
        
     
    }); 
  }

  /*remove(){

    var adaRef = this.db.list('/Events');
    adaRef.remove()
      .then(function() {
        //window.location.reload();
        console.log("Remove succeeded.")
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message)
      });
    }*/

async back(){
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slidePrev();
}

async next(){
  var swiper=document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();
}

async onViewTitleChanged(title:string) {
  this.viewTitle = title;
}


async onEventSelected(newEvent) {
  
 
  console.log('Event: ' + JSON.stringify(newEvent));
  const start = moment(newEvent.startTime).format('LL');
  const end = moment(newEvent.endTime).format('LL');
  const itemsRef = this.db.list('Events');

    
    const alert =  await this.alertCtrl.create({
      header: newEvent.title,
      subHeader: newEvent.description,
      message: `
        <p> Begin ${start} ${newEvent.startplace}</p> 
        <p>Ende ${end} ${newEvent.endplace}</p>
        <p > ${newEvent.description}</p>
        
      `,
      buttons: [
        {text:this.translate.instant('TAB1.btn-delete'),
        handler:()=>{

          var adaRef = this.db.list('/Events');
    adaRef.remove()
      .then(function() {
        
        //window.location.reload();
        console.log("Remove succeeded.")
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message)
      });

          //this.remove();
          
        }
      },{
        text: this.translate.instant('TAB1.btn-edit'),
        handler:()=>{
          
          
        }
              
        },{
          text:this.translate.instant('TAB1.btn-share'),
          handler:(newEvent)=>{

            this.hallo();

            
           
    

        let navigationExtras: NavigationExtras = {queryParams: {special: JSON.stringify(newEvent)}};
        this.router.navigate(['tabs/tab3'], navigationExtras).then(() => {
        console.log('going to produkt');
          })
          this.db.list('Events/').valueChanges().subscribe(data=>{
            console.log(newEvent)
              })
                
          }
        }]

    })
    await alert.present();
  }
  

items:any;

async hallo(){

 firebase.database().ref('/Events/').once('value').then(function(data){

    alert(JSON.stringify(data.val()));
  })
}

}




