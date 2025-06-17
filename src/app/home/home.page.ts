import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Map, tileLayer, marker, icon, circle } from 'leaflet';
import * as L from 'leaflet';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{
  map: any;
  items: any;
  userMarker: any; // Agregado para el marcador de usuario
  constructor(
    public db: DatabaseService,
    public router: Router,
    private platform: Platform
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

  async loadMap() {
    try {
      let userLat: number;
      let userLng: number;
      if (this.platform.is('capacitor')) {
        // Solicitar permisos en Android/iOS
        const permResult = await Geolocation.requestPermissions();
        if (permResult.location !== 'granted' && permResult.coarseLocation !== 'granted') {
          throw new Error('Permiso de ubicación denegado');
        }
      }
      // Obtener ubicación (web o nativo)
      const position = await Geolocation.getCurrentPosition();
      userLat = position.coords.latitude;
      userLng = position.coords.longitude;

      // Solución: destruir el mapa si ya existe para evitar el error de inicialización múltiple
      if (this.map) {
        this.map.remove();
        this.map = null;
      }

      // Inicializar el mapa centrado en la ubicación inicial del usuario
      this.map = L.map('map', {
        center: [userLat, userLng],
        zoom: 18,
      });

      // Agregar capa de fondo al mapa
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      // Agregar marcadores adicionales desde los datos
      this.items.forEach((element: any) => {
        const markerInstance = L.marker([element.lat, element.lng], {
          icon: icon({
            iconUrl: '../assets/icon/location-inv.png',
            iconSize: [20, 20],
            iconAnchor: [22, 94],
            popupAnchor: [-15, -88],
            className: 'invert-color-marker'
          })
        }).addTo(this.map);

        const popupContent = document.createElement('div');
        popupContent.innerHTML = `
          <strong>${element.nombre}</strong><br>
          ${element.direccion}<br>
          ${element.tipo}<br>
          ${element.open ? 'Abierto' : 'Cerrado'}<br>
          <ion-button class="go-to-card" size="small">Ir</ion-button>
        `;

        markerInstance.bindPopup(popupContent);

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

      // Actualizar o agregar el marcador de la ubicación actual
      if (this.userMarker) {
        this.userMarker.setLatLng([userLat, userLng]);
      } else {
        this.userMarker = L.marker([userLat, userLng], {
          icon: icon({
            iconUrl: '../assets/icon/location-red.png',
            iconSize: [20, 20],
            iconAnchor: [22, 94],
            popupAnchor: [-15, -88],
          })
        }).addTo(this.map).bindPopup('Estás aquí').openPopup();
      }

      // Centrar el mapa en la nueva ubicación
      this.map.setView([userLat, userLng], 18);
    } catch (error) {
      console.error('Error al obtener la ubicación:', error);
      alert('No se pudo obtener tu ubicación. Asegúrate de habilitar la geolocalización.');
    }
  }
}
