import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatalogserviceService {

  posts: any = [];
  scooters: any[];
  boards: any[];

  /** this service includes all dummy products from Ohmbike */
  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  load() {

    this.posts = [
      { title: 'OhmBike iRider - faltbares EBike', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png' },
      { title: 'OhmBike iUrban 20', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png' },
      { title: 'OhmBike iRider - faltbares EBike "Marc Marquez Edition', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png' }
    ];

    this.scooters = [
      { title: 'OhmScooter R9 eXtreme', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png' },
      { title: 'OhmScooter R9', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png' },
      { title: 'OhmScooter R8', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png' },
      { title: 'OhmScooter R6', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png' },
    ];

    this.boards = [
      { title: 'OhmBoard iCruiser', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png' },
      { title: 'OhmBoard iRocket', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png' },
      { title: 'OhmBoard iWave', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png' },
      { title: 'OhmBoard iWild', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png' },
      { title: 'OhmBoard Segway', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png' },
      { title: 'OhmBoard Segway Plus', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png' },
      { title: 'OhmSkate Dreiradscooter', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png' }
    ];
  }
}