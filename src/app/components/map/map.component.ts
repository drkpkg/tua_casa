import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input() mapId: string;
  @Input() showMarker: boolean;
  @Input() markerText: string;
  @Input() markerLat: number;
  @Input() markerLng: number;
  @Input() markerList: any;
  @Input() width: string;
  @Input() height: string;
  @Input() markerGPS: boolean;
  @Input() markerDraggable: boolean;
  private map: any;

  constructor() {
    this.mapId = 'map';
    this.map = null;
    this.showMarker = false;
    this.markerLat = 0;
    this.markerLng = 0;
    this.markerList = [];
    this.markerText = 'I am a marker.';
    this.width = '100%';
    this.height = '300px';
    this.markerGPS = false;
    this.markerDraggable = false;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap() {
    this.map = L.map(this.mapId).setView([51.505, -0.09], 13);
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
    if (this.showMarker) {
      this.addMarker(this.markerLat, this.markerLng, this.markerDraggable);
    }
    if (this.markerList.length > 0) {
      this.markerList.forEach((marker: any) => {
        this.addMarker(marker.lat, marker.lng, this.markerDraggable);
      });
    }
    if (this.markerGPS) {
      this.map.locate({setView: true, maxZoom: 16});
      this.map.on('locationfound', (e: any) => {
        this.addMarker(e.latitude, e.longitude,  false);
      });
    }
  }

  private addMarker(markerLat: number, markerLng: number, draggable?: boolean) {
    const marker = L.marker([markerLat, markerLng]).addTo(this.map);
    if (draggable) {
      marker.dragging?.enable();
    }
    marker.bindPopup(this.markerText).openPopup();
  }
}
