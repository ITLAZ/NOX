import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {

  nombre: string = '';
  registerForm!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public db : DatabaseService,
    public auth: AuthService
  ) { 
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  register() {
    if (this.registerForm.valid) {
      console.log('formulario valido', this.registerForm.valid);
      console.log('valores del formulario', this.registerForm.value);
      this.auth.registerUser(
        this.registerForm.value.email,
        this.registerForm.value.password,
        this.registerForm.value)
        .then((res: any) => {console.log('usuario creado', res);});

    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }
  /* subirRestaurantes() {
    let restaurants = [
      { name: 'Gustu', address: 'Calle 10, Calacoto, La Paz', lat: -16.523, lng: -68.112, open: true },
      { name: 'Namas Té', address: 'Av. Montenegro, San Miguel, La Paz', lat: -16.522, lng: -68.121, open: false },
      { name: 'Ali Pacha', address: 'Calle Colón, Centro, La Paz', lat: -16.495, lng: -68.133, open: true },
      { name: 'Cafe Typica', address: 'Calle Sagárnaga, Centro, La Paz', lat: -16.496, lng: -68.134, open: true },
      { name: 'Vainilla Coffee', address: 'Calle 21, Calacoto, La Paz', lat: -16.525, lng: -68.110, open: false },
      { name: 'The Writer\'s Coffee', address: 'Calle Comercio, Centro, La Paz', lat: -16.500, lng: -68.137, open: true },
      { name: 'Mozzarella Pizza', address: 'Av. Arce, Sopocachi, La Paz', lat: -16.508, lng: -68.123, open: true },
      { name: 'La Tranquera', address: 'Calle 15, Calacoto, La Paz', lat: -16.524, lng: -68.115, open: false },
      { name: 'Chez Moustache', address: 'Calle Jaén, Centro, La Paz', lat: -16.497, lng: -68.136, open: true },
      { name: 'El Patio', address: 'Calle Tarija, Sopocachi, La Paz', lat: -16.507, lng: -68.122, open: true }
    ];
  
    restaurants.forEach((restaurant) => {
      this.db.addFirestoreDocument('restaurantPruebas', restaurant)
        .then(() => {
          console.log('Restaurante agregado:', restaurant.name);
        })
        .catch((error) => {
          console.error('Error al agregar restaurante:', restaurant.name, error);
        });
    });
  } */
 /* subirMenu() {
   const menu = [
   { name: 'California Roll', description: 'Roll relleno de cangrejo, aguacate y pepino, cubierto con semillas de sésamo.', price: 35 },
   { name: 'Spicy Tuna Roll', description: 'Roll con atún picante, mayonesa especial y cebollín.', price: 40 },
   { name: 'Salmon Nigiri', description: 'Lonja fresca de salmón sobre arroz avinagrado.', price: 25 },
   { name: 'Ebi Tempura Roll', description: 'Roll con camarón tempurizado, aguacate y salsa teriyaki.', price: 45 },
   { name: 'Sashimi Mix', description: 'Selección de salmón, atún y pescado blanco fresco.', price: 60 },
   { name: 'Dragon Roll', description: 'Roll con anguila, aguacate y pepino, cubierto con aguacate y salsa anguila.', price: 50 },
   { name: 'Tuna Tataki', description: 'Atún sellado con salsa ponzu y cebollín.', price: 55 },
   { name: 'Miso Soup', description: 'Sopa tradicional japonesa de miso con tofu y algas.', price: 15 },
   { name: 'Green Tea Ice Cream', description: 'Helado de té verde japonés, ideal para el postre.', price: 20 },
   { name: 'Make Sushi Special Roll', description: 'Roll exclusivo de la casa con ingredientes frescos y salsa especial.', price: 65 }
  ];
  
  menu.forEach((item) => {
    this.db.addFirestoreDocument('menuPruebas', item)
    .then(() => {
      console.log('Producto agregado:', item.name);
    })
    .catch((error) => {
      console.error('Error al agregar producto:', item.name, error);
    });
  });
} */

/* subirEntradas() {
  const entradas = [
    {
      tipo: 'General',
      descripcion: 'Entrada general que permite acceso a todas las áreas estándar del evento.',
      precio: 50
    },
    {
      tipo: 'VIP',
      descripcion: 'Entrada VIP con acceso prioritario y zonas exclusivas.',
      precio: 120
    },
    {
      tipo: 'Early Bird',
      descripcion: 'Entrada anticipada con precio especial para compras tempranas.',
      precio: 40
    },
    {
      tipo: 'Meet & Greet',
      descripcion: 'Entrada para conocer personalmente a los artistas.',
      precio: 200
    },
    {
      tipo: 'Hospitalidad',
      descripcion: 'Entrada para zonas de lujo con servicios premium.',
      precio: 250
    }
  ];

  entradas.forEach((entrada) => {
    this.db.addFirestoreDocument('entradasPruebas', entrada)
      .then(() => {
        console.log('Entrada agregada:', entrada.tipo);
      })
      .catch((error) => {
        console.error('Error al agregar entrada:', entrada.tipo, error);
      });
  });
} */
}
