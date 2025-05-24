import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-lugares-menu',
  templateUrl: './lugares-menu.page.html',
  styleUrls: ['./lugares-menu.page.scss'],
  standalone: false
})
export class LugaresMenuPage implements OnInit {
  lugarId!: string;
  menu: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private db: DatabaseService
  ) {}

  ngOnInit() {
    // Obtener el ID del lugar desde la URL
    this.lugarId = this.route.snapshot.paramMap.get('id')!;
    console.log('Lugar ID:', this.lugarId);

    if (!this.lugarId) {
      console.error('El ID del lugar es nulo o no válido.');
      return;
    }

    // Obtener la subcolección `menu`
    this.db.getSubcollection('locales', this.lugarId, 'menu').subscribe({
      next: (data) => {
        this.menu = data;
        console.log('Menú cargado:', this.menu);
      },
      error: (err) => {
        console.error('Error al cargar el menú:', err);
      },
    });
  }
calcularTotal(menu: any[]): number {
  return menu.reduce((total, item) => total + (item.precio || 0), 0);
}

}