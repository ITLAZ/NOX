import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membresia-compra-confirmacion',
  templateUrl: './membresia-compra-confirmacion.page.html',
  styleUrls: ['./membresia-compra-confirmacion.page.scss'],
  standalone: false,
})
export class MembresiaCompraConfirmacionPage implements OnInit {
  selectedPlan: string = '';
  planDetails: { title: string, duration: string, price: number, endDate: string } | null = null;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadSelectedPlan();
  }

  loadSelectedPlan() {
    const selectedPlan = localStorage.getItem('selectedMembresia');
    if (selectedPlan) {
      this.selectedPlan = selectedPlan;
      this.calculatePlanDetails();
    }
  }

  calculatePlanDetails() {
    const currentDate = new Date();
    let endDate: Date;

    const planOptions = {
      mensual: {
        title: 'Plan Mensual',
        duration: '1 mes de duración',
        price: 70,
        months: 1,
      },
      trimestral: {
        title: 'Plan Trimestral',
        duration: '3 meses de duración',
        price: 180,
        months: 3,
      },
      anual: {
        title: 'Plan Anual',
        duration: '12 meses de duración',
        price: 700,
        months: 12,
      },
    };

    const plan = planOptions[this.selectedPlan as keyof typeof planOptions];
    if (plan) {
      endDate = new Date(currentDate);
      endDate.setMonth(currentDate.getMonth() + plan.months);
      this.planDetails = {
        title: plan.title,
        duration: plan.duration,
        price: plan.price,
        endDate: endDate.toLocaleDateString(), // Formatea la fecha
      };
    }
  }
goToPayCard() {
  this.router.navigate(['/pay-card']);
}

goToPayQR() {
  this.router.navigate(['/pay-qr']);
}
}
