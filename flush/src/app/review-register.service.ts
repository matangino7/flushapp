import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from './review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewRegisterService {
    private endpointUrl = 'http://127.0.0.1:8000/review/';

    constructor(private http: HttpClient) {}

    register(review: Review): Observable<any>{
        return this.http.post(this.endpointUrl, review);
    }
}
