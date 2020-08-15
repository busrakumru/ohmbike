import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-event-card',
  templateUrl: './my-event-card.component.html',
  styleUrls: ['./my-event-card.component.scss'],
})
export class MyEventCardComponent implements OnInit {

  newEvent: any;
  newEventStartTime: any;
  newEventEndTime: any;
  newEventStartPlace: any;
  newEventEndPlace: any;
  newEventDescription: any;

  constructor(
    public aroute: ActivatedRoute,

  ) { 

        /** gets the shared event data from tab1 */
        this.aroute.queryParams.subscribe(params => {
          if (params && params.special) {
            this.newEvent = JSON.parse(params.special);
            this.newEventStartTime = JSON.parse(params.specialStartTime);
            this.newEventEndTime = JSON.parse(params.specialEndTime);
            this.newEventStartPlace = JSON.parse(params.specialStartPlace);
            this.newEventEndPlace = JSON.parse(params.specialEndPlace);
            this.newEventDescription = JSON.parse(params.specialDescription);


            
            console.log("got data !" + JSON.stringify(this.newEvent));
    
          }
    
        });
  }

  ngOnInit() {}

  visible = false;

  details(){

    this.visible = !this.visible;


  }

}
