import { Injectable } from '@angular/core';


// return JSON.parse(localStorage.getItem('loggedIn')|| this.isLoggedInstatus.toString());
// interface authdata {
//   success: boolean,
//   message: string
// }
@Injectable({
  providedIn: 'root'
})
export class AuthservService {

private isLoggedInstatus = false;

setLoggedIn(value: boolean){
  this.isLoggedInstatus =value ;
  localStorage.setItem('loggedIn', 'true')

}
get islogin() {
  return this.isLoggedInstatus;

}

  constructor() { }

}

