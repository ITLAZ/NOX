import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
  standalone: false
})
export class HistorialPage implements OnInit {
  activeTab: string = 'lugares'; // Tab activa por defecto

  historialLocales: any[] = [];
  historialEventos: any[] = [];

  constructor(
    private router: Router,
    private db: DatabaseService
  ) {}

  ngOnInit() {
    const storedProfile = localStorage.getItem('profile');
    const userData = storedProfile ? JSON.parse(storedProfile) : null;
    const userId = userData?.id;

    if (userId) {
      this.db.getSubcollection('usersPrueba', userId, 'historialCompraLocal')
        .subscribe(data => {
          this.historialLocales = data;
        });

      this.db.getSubcollection('usersPrueba', userId, 'historialCompraEvento')
        .subscribe(data => {
          this.historialEventos = data;
        });
    } else {
      console.warn('No se encontró el perfil del usuario en localStorage.');
    }
  }
  navigateBack() {
    this.router.navigate(['/perfil']); // Ajusta el path según la navegación deseada
  }
}