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

  submitPayment() {
    if (this.cardForm.invalid) {
      this.cardForm.markAllAsTouched();
      return;
    }

    this.isProcessing = true;
    this.paymentSuccess = null;

    // Simular el procesamiento
    setTimeout(() => {
      const success = true; // o usa: Math.random() > 0.5;
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
  }
}
