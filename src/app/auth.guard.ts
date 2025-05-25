import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Promise<boolean | UrlTree> {
    // Usar un método público en AuthService para exponer el estado de autenticación
    return this.authService.isLoggedInAsync().then(isLogged => {
      if (isLogged) {
        return true;
      } else {
        return this.router.createUrlTree(['/start']);
      }
    });
  }
}
