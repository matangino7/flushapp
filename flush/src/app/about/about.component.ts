import { Component } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
    username = localStorage.getItem("username");


    logout(){
        const auth = new AuthenticateService;
        window.location.href = "/";
        auth.logout();
    }
}
