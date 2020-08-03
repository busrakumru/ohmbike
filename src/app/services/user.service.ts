import { Injectable } from '@angular/core';

interface user{

  user_name: string,
  uid: string

}

@Injectable({
  providedIn: 'root'
})


export class UserService {

  private user : user;

  constructor() { }

  setUser(user: user){
    this.user;
  }

  getUid(){

    return this.user.uid  }
}
