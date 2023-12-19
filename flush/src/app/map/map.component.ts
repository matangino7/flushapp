import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkersService } from '../markers.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})


export class MapComponent implements AfterViewInit {
    private map: L.Map | L.LayerGroup<any> | undefined;

    constructor(private markersService: MarkersService) {}

    private initMap(): void {
        this.map = L.map('map', {
            center: [39.8282, -98.5795],
            zoom: 3
        });

        const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            minZoom: 3,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        tiles.addTo(this.map);
        this.markersService.makeToiletMarkers(this.map);
    }


    // private myicon = L.icon({
    //     iconUrl: 'assets/white-roll-toilet-paper-vector-28147662-removebg-preview.png',
    //     iconSize:     [80, 95], // size of the icon
    //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    // })


    // private createPoint(lat: number, lng: number): void {
    //     const marker = L.marker([lat, lng], {icon: this.myicon}).addTo(this.map!);
    //     marker.bindPopup(`Coordinates: ${lat}, ${lng}`).openPopup();
    // }


    ngAfterViewInit(): void {
        this.initMap();

        this.map!.on('click',  (e) => {
            if(localStorage.getItem('access') === "allow"){
                var lat = e.latlng.lat;
                var lng = e.latlng.lng;
            }
        })
    }
}