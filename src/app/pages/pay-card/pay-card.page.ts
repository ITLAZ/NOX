import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-pay-card',
  templateUrl: './pay-card.page.html',
  styleUrls: ['./pay-card.page.scss'],
  standalone: false
})
export class PayCardPage implements OnInit {
  @ViewChild(IonContent) content!: IonContent; // Referencia al contenido para el scroll

  cardForm!: FormGroup;
  isProcessing = false;
  paymentSuccess: boolean | null = null;

  // Variables para el selector de fecha
  fechaTemp: string = '';
  fechaSeleccionada: string = '';
  mostrarFecha: boolean = false;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private router: Router,
  ) {}

  ngOnInit() {
    this.cardForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiry: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[+0-9 ]{8,20}$')]],
      postalCode: ['', Validators.required]
    });
  }

  toggleFecha() {
    this.mostrarFecha = !this.mostrarFecha;
  }

  onFechaChange(event: any) {
    this.fechaTemp = event.detail.value;
  }

  confirmarFecha() {
    if (this.fechaTemp) {
      this.fechaSeleccionada = this.formatDate(this.fechaTemp);
      this.cardForm.get('expiry')?.setValue(this.fechaSeleccionada);
    }
    this.mostrarFecha = false;
  }

  formatDate(value: string): string {
    const [year, month] = value.split('-');
    return `${month}/${year}`;
  }

  submitPayment() {
  console.log('Formulario enviado:', this.cardForm.value);
  if (this.cardForm.invalid) {
    console.warn('Formulario inválido');
    this.cardForm.markAllAsTouched();
    return;
  }

  this.isProcessing = true;
  this.paymentSuccess = null;

  // Simular el procesamiento del pago
  setTimeout(() => {
    const success = true; // Simula el éxito o falla
    this.paymentSuccess = success;
    this.isProcessing = false;
  }, 5000);
}

  async scrollToCenter() {
    const scrollHeight = this.content.getScrollElement();
    const center = (await scrollHeight).scrollHeight / 2;
    this.content.scrollToPoint(0, center - 200, 300);
  }

volverInicio() {
  // Elimina el item 'cart' del localStorage
  localStorage.removeItem('cart');
  
  // Navega de vuelta al menú
  this.router.navigate(['/menu']); // Cambia '/menu' por la ruta deseada
}

  reintentarPago() {
    this.cardForm.reset();
    this.paymentSuccess = null;
    this.fechaSeleccionada = '';
    this.fechaTemp = '';
  }
}
