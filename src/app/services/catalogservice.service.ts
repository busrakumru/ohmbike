import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatalogserviceService {
  posts: any=[];
  
  /** this service includes all dummy products from Ohmbike */

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');


    
  
   }

   load(){

    this.posts=[
      { title: 'Grails 4 Tutorial: Spring Security Core Login Example', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png' },
      { title: 'Angular Material Form Controls, Form Field and Input Examples', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png' },
      { title: 'Angular 8 Tutorial: Observable and RXJS Examples', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png'},
      { title: 'React Native Tutorial: Facebook Login Example', image: 'assets/img-ohmbikeprodukte/Matte .png' },
      { title: 'Spring Boot Tutorial: Build an MVC Java Web App using Netbeans', image: 'assets/img-ohmbikeprodukte/Matte Khaki.png' },
    ];
        }
      

  getItem(id){
  	
  }


  addItem(){
  	
  }
}
