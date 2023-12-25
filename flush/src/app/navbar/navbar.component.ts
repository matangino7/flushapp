import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
    public name: string | null = null;

    ngOnInit(): void {
        this.name = localStorage.getItem("username");
    }
}
