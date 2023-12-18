import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
    private endpointUrl = 'http://127.0.0.1:8000/users/';

    constructor(private http: HttpClient) {}

    register(user: User): Observable<any>{
        return this.http.post(this.endpointUrl, user);
    }
}
