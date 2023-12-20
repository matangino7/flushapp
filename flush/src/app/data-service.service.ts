import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
    private dataSubject = new BehaviorSubject<number>(0);
    data = this.dataSubject.asObservable();

    constructor(){}

    updateData(newData: number) {
        this.dataSubject.next(newData);
    } 
}
