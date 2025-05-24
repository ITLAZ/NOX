import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {register} from 'swiper/element/bundle';
  register();
  
@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
  standalone: false
})
export class HistorialPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

navigateBack() {
  this.router.navigate(['/perfil']); // Ajusta el path según la navegación deseada
}
}
