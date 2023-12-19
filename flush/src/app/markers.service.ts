import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { Observable } from 'rxjs';
import { Marker } from './marker.model';

@Injectable({
  providedIn: 'root'
})
export class MarkersService {
    private endpointUrl = 'http://127.0.0.1:8000/points/';

    constructor(private http: HttpClient) {
    }

    getToiletMarkers(): Observable<Marker[]> {
        return this.http.get<Marker[]>(this.endpointUrl);
    }

    makeToiletMarkers(map: L.Map): void {
        this.getToiletMarkers().subscribe(markers => {
            var myicon = L.icon({
                iconUrl: 'assets/white-roll-toilet-paper-vector-28147662-removebg-preview.png',
                iconSize:     [80, 95], // size of the icon
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
            })

            markers.forEach(marker => {
              L.marker([marker.latitude, marker.longitude], {icon: myicon})
                .bindPopup(marker.description)
                .addTo(map);
            });
          });
    }
}
