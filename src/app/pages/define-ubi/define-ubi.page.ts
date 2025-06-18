import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, marker, icon, circle } from 'leaflet';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-define-ubi',
  templateUrl: './define-ubi.page.html',
  styleUrls: ['./define-ubi.page.scss'],
  standalone: false
})
export class DefineUbiPage implements OnInit {
  map: any;
  items: any;
  selectedPlaceName: string = '';
  selectedMarker: any = null;
  constructor(
    private http: HttpClient
  ) {
    
  }
  ngOnInit() {

  }

  ngAfterViewInit(): void {
    // Delay to ensure the map is rendered after the view is initialized
    setTimeout(() => {
      console.log('MapPage ngOnInit');
      this.setMapToUserLocation();
    }, 3000);
  }

  setMapToUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          this.loadMap(lat, lng);
        },
        (error) => {
          // Si falla, usa la ubicación por defecto
          this.loadMap(-16.5, -68.15);
        }
      );
    } else {
      this.loadMap(-16.5, -68.15);
    }
  }

  loadMap(lat: number, lng: number) {
    this.map = L.map('map', {
      center: [lat, lng],
      zoom: 18,
    });
  
    // ✅ Esta es la capa de fondo del mapa (calles, terreno, etc.)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Evento de click en el mapa
    this.map.on('click', (e: any) => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;
      // Elimina el marcador anterior si existe
      if (this.selectedMarker) {
        this.map.removeLayer(this.selectedMarker);
      }
      // Agrega un nuevo marcador
      this.selectedMarker = L.marker([lat, lng], {
        icon: icon({
          iconUrl: '../assets/icon/favicon.png',
          iconSize: [38, 38],
          iconAnchor: [22, 94],
          popupAnchor: [-15, -88]
        })
      }).addTo(this.map);
      // Muestra las coordenadas en el input
      this.selectedPlaceName = `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
    });

    if (this.items) {
      this.items.forEach((element: any) => {
        const markerInstance = L.marker([element.lat, element.lng], {
          icon: icon({
            iconUrl: '../assets/icon/favicon.png',
            iconSize: [38, 38],
            iconAnchor: [22, 94],
            popupAnchor: [-15, -88]
          })
        }).addTo(this.map);
      });
    }
    setTimeout(() => {
      this.map.invalidateSize();
    }, 200);
  }
}




