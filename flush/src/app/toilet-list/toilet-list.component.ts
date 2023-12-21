import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marker } from '../marker.model';
import { Review } from '../review.model';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-toilet-list',
  templateUrl: './toilet-list.component.html',
  styleUrls: ['./toilet-list.component.css']
})
export class ToiletListComponent implements OnInit {
  private endpointUrl = 'http://127.0.0.1:8000/points/';
  private endpointReview = 'http://127.0.0.1:8000/fetchReviews/';
  public data: Array<Marker> = [];
  @ViewChild('myFigure') myFigure!: ElementRef;

  constructor(private http: HttpClient, private dataService: DataServiceService) {}

  getToiletMarkers(): Observable<Marker[]> {
    return this.http.get<Marker[]>(this.endpointUrl);
  }

  getToiletReviews(id: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.endpointReview}${id}/`);
  }

  makeToiletMarkers(): void {
    this.getToiletMarkers().subscribe(
      markers => {
        navigator.geolocation.getCurrentPosition(
          position => {
            const userLocation = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            };

            this.data = markers.sort((a, b) => {
              const distanceA = this.calculateDistance(a.latitude, a.longitude, userLocation);
              const distanceB = this.calculateDistance(b.latitude, b.longitude, userLocation);
              return distanceA - distanceB;
            });
          },
          error => {
            console.error('Error getting user location:', error);
          }
        );

        markers.forEach(marker => {
          this.getToiletReviews(marker.id).subscribe(
            reviews => {
              marker.reviews = reviews;
            }
          );
        });
      },
      error => {
        console.error('Error fetching toilet markers:', error);
      }
    );
  }

  calculateDistance(lat: number, lon: number, userLocation: { latitude: number; longitude: number }): number {
    const R = 6371; 
    const dLat = this.toRad(lat - userLocation.latitude);
    const dLon = this.toRad(lon - userLocation.longitude);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(userLocation.latitude)) * Math.cos(this.toRad(lat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }

  toRad(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  onClick(id: number) {
    localStorage.setItem('itemid', id.toString());
    location.href = '/review';
  }

  ngOnInit(): void {
    this.makeToiletMarkers();
  }
}
