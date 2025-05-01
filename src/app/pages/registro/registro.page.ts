import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {

  nombre: string = '';
  registerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
  ) { 
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      password: ['', [Validators.required]],
      password2: [''],
    });
  }

  ngOnInit() {
  }

  register() {
    // aqui viene la logica para registrar al usuario

    if (this.registerForm.valid) {
      console.log('formulario valido', this.registerForm.valid);
      console.log('valores del formulario', this.registerForm.value);
      
    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }

}
