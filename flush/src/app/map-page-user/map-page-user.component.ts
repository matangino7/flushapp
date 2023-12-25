import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-map-page-user',
  templateUrl: './map-page-user.component.html',
  styleUrls: ['./map-page-user.component.css']
})
export class MapPageUserComponent implements OnInit {

    username = localStorage.getItem("username");
    loading = true;

    constructor(private spinner: NgxSpinnerService) { }

    logout(){
        const auth = new AuthenticateService;
        window.location.href = "/";
        auth.logout();
    }


    ngOnInit(): void {
        setTimeout(() => {
            this.loading = false;
        }, 3000)
    }
}
