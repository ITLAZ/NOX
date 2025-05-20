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

}
