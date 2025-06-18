import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
  standalone: false
})
export class LugaresPage implements OnInit {
  locales: any[] = [];
  allLocales: any[] = [];
  isLoading = true;
  private bannersInitialized = false;

  constructor(private db: DatabaseService, private router: Router) {}


ngOnInit() {
  this.db.getLocales().subscribe(data => {
    this.allLocales = data;
    this.locales = data;
    this.isLoading = false;
    if (!this.bannersInitialized) {
      this.bannersInitialized = true;
    }
  });
}

// Quitar lógica de banners aleatorios y exponer solo los primeros 5 locales
get bannerLocalesLimited() {
  return this.locales.slice(0, 5);
}

onEtiquetaSeleccionada(etiqueta: string) {
  if (!etiqueta) {
    this.locales = this.allLocales;
    return;
  }
  this.locales = this.allLocales.filter(local => (local.etiquetas || []).includes(etiqueta));
}

  irALocal(local: any) {
    this.router.navigate(['/lugares-card'], {
      queryParams: { id: local.id }
    });
  }

  // Para trackBy en banners y evitar problemas con Swiper
  trackByBannerId(index: number, item: any) {
    return item && item.id ? item.id : index;
  }
}