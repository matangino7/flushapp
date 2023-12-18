import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor() { }

  login(): boolean {    
    localStorage.setItem("access", "allow");
    return true;
  }

  isAuthenticated(): boolean {
    if(localStorage.getItem("access") === "allow"){
        return true;
    } else {
        return false;
    }
  }
}
