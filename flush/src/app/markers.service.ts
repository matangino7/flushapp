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
            markers.forEach(marker => {
              L.marker([marker.latitude, marker.longitude])
                .bindPopup(marker.description)
                .addTo(map);
            });
          });
    }
}
