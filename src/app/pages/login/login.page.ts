import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';

interface Book {
  name: string;
  author: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
}) export class LoginPage {

  form: FormGroup;
  constructor(
    public db: DatabaseService,
    public auth: AuthService,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  async login() {
    if (this.form.valid) {
      const { username, password } = this.form.value;
      try {
        await this.auth.loginByUsername(username, password);
        this.router.navigate(['/home']);
      } catch (e) {
        // El AuthService ya muestra el error
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  async loginWithGoogle() {
    try {
      await this.auth.loginGoogle();
      this.router.navigate(['/home']);
    } catch (e) {
      // El AuthService ya muestra el error
    }
  }

}
