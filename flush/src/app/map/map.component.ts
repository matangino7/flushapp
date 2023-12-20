import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
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
  iconAnchor: [12, 20.5],
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
    public lang: number =  0;
    public lat: number =  0;
    isComponentVisible: boolean = false;

    @Output() locationSelected = new EventEmitter<{ lat: number; lang: number }>();
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


    ngAfterViewInit(): void {
        this.initMap();

        this.map!.on('click',  (e) => {
            if(localStorage.getItem('access') === "allow"){
                this.lat = e.latlng.lat;
                this.lang = e.latlng.lng;
                this.locationSelected.emit({ lat: this.lat, lang: this.lang });
                this.isComponentVisible = !this.isComponentVisible
            }
        })
    }
}