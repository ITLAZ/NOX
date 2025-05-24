import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-recompensas',
  templateUrl: './recompensas.page.html',
  styleUrls: ['./recompensas.page.scss'],
  standalone: false,
})
export class RecompensasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  historialCanjeos = [
  { titulo: 'Cupon 10%', fecha: '24 de abril de 2025', puntos: 100 },
  { titulo: 'Cupon 30%', fecha: '24 de abril de 2025', puntos: 500 },
  { titulo: 'Cupon 50%', fecha: '24 de abril de 2025', puntos: 1000 },
  { titulo: 'Cupon 80%', fecha: '24 de abril de 2025', puntos: 1500 },
  { titulo: 'Cupon 10%', fecha: '24 de abril de 2025', puntos: 100 },
  { titulo: 'Cupon 30%', fecha: '24 de abril de 2025', puntos: 500 },
  { titulo: 'Cupon 50%', fecha: '24 de abril de 2025', puntos: 1000 },
];


}
