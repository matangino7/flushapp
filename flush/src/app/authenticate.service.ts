import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor() { }

  login(): boolean {    
    localStorage.setItem("access", "allow");
    return true;
  }

  logout(){
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    if(localStorage.getItem("access") === "allow"){
        return true;
    } else {
        return false;
    }
  }
}
