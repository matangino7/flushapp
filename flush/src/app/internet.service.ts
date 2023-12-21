import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InternetService {
  constructor(private http: HttpClient) {}

  testUrl = 'http://127.0.0.1:8000/users/';

  isInternet(): Observable<boolean> {
    return this.http.get(this.testUrl).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}