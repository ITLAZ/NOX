import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Map, tileLayer, marker, icon, circle } from 'leaflet';
import * as L from 'leaflet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{
  map: any;
  items: any;
  constructor(
    public db: DatabaseService,
    public router: Router
  ) {
    this.db.fetchFirestoreCollection('locales')
      .subscribe((data: any) => {
        if (data.length > 0) {
          this.items = data
        }
      })
  }
  ngOnInit() {

  }

  ngAfterViewInit(): void {
    // Delay to ensure the map is rendered after the view is initialized
    setTimeout(() => {
      console.log('MapPage ngOnInit');
      this.loadMap()
    }, 3000);
  }

  loadMap() {
    this.map = L.map('map', {
      center: [-16.5, -68.15], // Coordenadas de La Paz, Bolivia
      zoom: 18,
    });
  
    // ✅ Esta es la capa de fondo del mapa (calles, terreno, etc.)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  
    this.items.forEach((element: any) => {
  const markerInstance = L.marker([element.lat, element.lng], {
    icon: icon({
      iconUrl: '../assets/icon/favicon.png',
      iconSize: [38, 38],
      iconAnchor: [22, 94],
      popupAnchor: [-15, -88]
    })
  }).addTo(this.map);

  // Creamos contenido del popup con un botón
  const popupContent = document.createElement('div');
  popupContent.innerHTML = `
  <strong>${element.nombre}</strong><br>
  ${element.direccion}<br>
  ${element.tipo}<br>
  ${element.open ? 'Abierto' : 'Cerrado'}<br>
  <ion-button class="go-to-card" size="small">Ir</ion-button>
`;

  // Asociamos el popup al marcador
  markerInstance.bindPopup(popupContent);

  // Evento cuando se abre el popup
  markerInstance.on('popupopen', () => {
  const btn = popupContent.querySelector('.go-to-card');
  if (btn) {
    btn.addEventListener('click', () => {
      this.router.navigate(['/lugares-card'], {
        queryParams: { id: element.id }
      });
    });
  }
});
});
  }
}
