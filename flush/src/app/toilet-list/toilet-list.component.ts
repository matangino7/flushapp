import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marker } from '../marker.model';
@Component({
  selector: 'app-toilet-list',
  templateUrl: './toilet-list.component.html',
  styleUrls: ['./toilet-list.component.css']
})
export class ToiletListComponent implements OnInit{
    private endpointUrl = 'http://127.0.0.1:8000/points/';
    public data: Array<Marker> = [];
    // public url = this.data[0].photo.slice(-12);

    constructor(private http: HttpClient) {
    }

    getToiletMarkers(): Observable<Marker[]> {
        return this.http.get<Marker[]>(this.endpointUrl);
    }

    makeToiletMarkers(): void {
        this.getToiletMarkers().subscribe(markers => {
            markers.forEach(marker => {
                this.data.push(marker)
            });
          });
    }

    ngOnInit(): void {
        this.makeToiletMarkers();

    }
}
