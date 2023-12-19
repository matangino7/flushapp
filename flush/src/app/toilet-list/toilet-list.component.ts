import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marker } from '../marker.model';
import { marker } from 'leaflet';
import { Review } from '../review.model';

@Component({
  selector: 'app-toilet-list',
  templateUrl: './toilet-list.component.html',
  styleUrls: ['./toilet-list.component.css']
})
export class ToiletListComponent implements OnInit {
  private endpointUrl = 'http://127.0.0.1:8000/points/';
  private endpointReview = 'http://127.0.0.1:8000/fetchReviews/';
  public data: Array<Marker> = [];

  constructor(private http: HttpClient) {}

  getToiletMarkers(): Observable<Marker[]> {
    return this.http.get<Marker[]>(this.endpointUrl);
  }

  getToiletReviews(id: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.endpointReview}${id}/`);
  }

  makeToiletMarkers(): void {
    this.getToiletMarkers().subscribe(
      markers => {
        markers.forEach(marker => {
            this.data.push(marker);

            this.getToiletReviews(marker.id).subscribe(
                reviews => {
                    marker.reviews = reviews;
                }
            )
        })
      },
      error => {
        console.error('Error fetching toilet markers:', error);
      }
    );
  }

  ngOnInit(): void {
    this.makeToiletMarkers();
  }
}