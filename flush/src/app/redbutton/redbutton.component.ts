import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Marker } from '../marker.model';

@Component({
  selector: 'app-redbutton',
  templateUrl: './redbutton.component.html',
  styleUrls: ['./redbutton.component.css']
})
export class RedbuttonComponent {
  @Input() toilet!: Marker;

  constructor(private router: Router) {}

  private getLocation(): Promise<number[]> {
    return new Promise<number[]>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          resolve([lat, lon]);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  async click() {
    try {
      const location = await this.getLocation();
      const myUrl = `https://www.google.com/maps/dir/?api=1&origin=${location[0]},${location[1]}&destination=${this.toilet.latitude},${this.toilet.longitude}`;
      window.open(myUrl);
    } catch (error) {
      console.error('Error getting location:', error);
    }
  }
}