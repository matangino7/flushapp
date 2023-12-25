import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marker } from '../marker.model';
import { Review } from '../review.model';
import { DataServiceService } from '../data-service.service';
import { ToiletRegisterService } from '../toilet-register.service';

@Component({
  selector: 'app-toilet-list',
  templateUrl: './toilet-list.component.html',
  styleUrls: ['./toilet-list.component.css']
})
export class ToiletListComponent implements OnInit {
  private endpointUrl = 'http://127.0.0.1:8000/points/';
  private endpointReview = 'http://127.0.0.1:8000/fetchReviews/';
  public data: Array<Marker> = [];
  public toilet = new EventEmitter<Marker>();  // Corrected initialization
  public currentUser = localStorage.getItem('username');
  @ViewChild('myFigure') myFigure!: ElementRef;

  constructor(private http: HttpClient, private dataService: DataServiceService, private toiletService: ToiletRegisterService) {}

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
          let sum = 0;
          let num = 0;
  
          this.getToiletReviews(marker.id).subscribe(
            reviews => {
              marker.reviews = reviews;
              num = reviews.length;
              
  
              reviews.forEach(review => {
                sum += review.numeric_review;
              });

              marker.total_rating = Math.min(5, Math.max(1, Math.round(Math.abs(sum / num)))) as 1 | 2 | 3 | 4 | 5;
            },
            error => {
              console.error('Error fetching toilet reviews:', error);
            }
          );
        });
      },
      error => {
        console.error('Error fetching toilet markers:', error);
      }
    );
  }

  isValidRating(rating: number): boolean {
    return Number.isInteger(rating) && rating >= 1 && rating <= 5;
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

  delete(id: number) {
    this.toiletService.delete(id).subscribe(
      () => {
        console.log('Toilet deleted successfully');
        location.href = '/map-user-page';
      },
      error => {
        console.error('Error deleting toilet:', error);
      }
    );
  }

  deleteReview(id: number) {
    this.toiletService.deleteReview(id).subscribe(
      () => {
        console.log('Toilet deleted successfully');
        location.href = '/map-user-page';
      },
      error => {
        console.error('Error deleting toilet:', error);
      }
    );
  }
  

  ngOnInit(): void {
    this.makeToiletMarkers();
    this.toilet.emit(this.data[0]);
  }
}

