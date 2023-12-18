import { Component } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-map-page-user',
  templateUrl: './map-page-user.component.html',
  styleUrls: ['./map-page-user.component.css']
})
export class MapPageUserComponent {
    logout(){
        const auth = new AuthenticateService;
        window.location.href = "/";
        auth.logout();
    }

}
