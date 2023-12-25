import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Toilet } from './toilet.model';
@Injectable({
  providedIn: 'root'
})
export class ToiletRegisterService {
    private endpointUrl = 'http://127.0.0.1:8000/pointsCreate/';

    constructor(private http: HttpClient) {}

    register(form: any): Observable<any>{
        return this.http.post(this.endpointUrl, form);
    }

    delete(id: number){
        return this.http.delete(`http://127.0.0.1:8000/points/${id}/`);
    }

    deleteReview(id: number){
        return this.http.delete(`http://127.0.0.1:8000/review/${id}/`);
    }
}
