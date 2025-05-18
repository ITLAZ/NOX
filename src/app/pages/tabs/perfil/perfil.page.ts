import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage implements OnInit {

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {}

  editarPerfil() {
    this.router.navigate(['/edit-profile']);
  }

  goTo(destino: string) {
    switch (destino) {
      case 'historial':
        this.router.navigate(['/historial']);
        break;
      case 'favorites':
        this.router.navigate(['/favorites']);
        break;
    }
  }
  cerrarSesion() {
    this.auth.logout();
  }
}
