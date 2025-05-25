import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

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
    public formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  login() {
    if (this.form.valid) {
      const { username, password } = this.form.value;
      this.auth.loginByUsername(username, password);
    } else {
      this.form.markAllAsTouched();
    }
  }

  loginWithGoogle() {
    this.auth.loginGoogle();
  }

}
