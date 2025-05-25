import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  // Datos predefinidos para lugares
  lugares = [
    {
      nombre: 'Make Sushi',
      imagen: 'assets/img/make-sushi.jpg',
      tipo: 'Restaurante',
      etiquetas: ['Comida', 'Japonés'],
      direccion: 'Calle Sakura 123',
      distancia: '2.5 km',
      calificacion: 4.8
    },
    {
      nombre: 'Pollos Copacabana',
      imagen: 'assets/img/copacabana.jpg',
      tipo: 'Restaurante',
      etiquetas: ['Comida Rápida'],
      direccion: 'Av. Central 456',
      distancia: '1.2 km',
      calificacion: 4.2
    }
  ];

  // Historial de compras en lugares
  historialLugares = [
    { nombre: 'Make Sushi', fecha: '2025-04-24', precio: 56 },
    { nombre: 'Pollos Copacabana', fecha: '2025-04-05', precio: 20 },
    { nombre: 'Burger King', fecha: '2025-03-15', precio: 112 }
  ];

  // Datos predefinidos para eventos
  eventos = [
    {
      nombre: 'Larga Noche de Museos',
      imagen: 'assets/img/noche-museos.jpg',
      tipo: 'Cultural',
      etiquetas: ['Cultural', 'Museos'],
      direccion: 'Múltiples ubicaciones',
      fecha: '2025-05-20',
      calificacion: 5.0
    },
    {
      nombre: 'Feria del Libro',
      imagen: 'assets/img/feria-libro.jpg',
      tipo: 'Cultural',
      etiquetas: ['Lectura', 'Libros'],
      direccion: 'Parque Urbano',
      fecha: '2025-06-15',
      calificacion: 4.5
    }
  ];

  // Historial de asistencia a eventos
  historialEventos = [
    { nombre: 'Larga Noche de Museos', fecha: '2025-05-20', precio: 0 },
    { nombre: 'Feria del Libro', fecha: '2025-06-15', precio: 10 }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateBack() {
    this.router.navigate(['/perfil']); // Ajusta el path según la navegación deseada
  }
}
