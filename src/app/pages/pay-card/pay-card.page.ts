import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pay-card',
  templateUrl: './pay-card.page.html',
  styleUrls: ['./pay-card.page.scss'],
  standalone: false
})
export class PayCardPage implements OnInit {

  cardForm!: FormGroup;
  isProcessing = false;
  paymentSuccess: boolean | null = null;

  // Variables para el selector de fecha
  fechaTemp: string = ''; // valor temporal YYYY-MM
  fechaSeleccionada: string = ''; // mostrado en botón como MM/YYYY
  mostrarFecha: boolean = false;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController
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
    this.fechaTemp = event.detail.value; // Formato: YYYY-MM
  }

  confirmarFecha() {
    if (this.fechaTemp) {
      this.fechaSeleccionada = this.formatDate(this.fechaTemp); // MM/YYYY
      this.cardForm.get('expiry')?.setValue(this.fechaSeleccionada);
    }
    this.mostrarFecha = false;
  }

  formatDate(value: string): string {
    const [year, month] = value.split('-');
    return `${month}/${year}`;
  }

  submitPayment() {
    if (this.cardForm.invalid) {
      this.cardForm.markAllAsTouched();
      return;
    }

    this.isProcessing = true;
    this.paymentSuccess = null;

    // Simular el procesamiento del pago
    setTimeout(() => {
      const success = true;
      this.paymentSuccess = success;
      this.isProcessing = false;
    }, 5000);
  }

  volverInicio() {
    this.navCtrl.navigateRoot('/home');
  }

  reintentarPago() {
    this.cardForm.reset();
    this.paymentSuccess = null;
    this.fechaSeleccionada = '';
    this.fechaTemp = '';
  }
}
