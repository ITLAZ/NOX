import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membresia-plan',
  templateUrl: './membresia-plan.page.html',
  styleUrls: ['./membresia-plan.page.scss'],
  standalone: false,
})
export class MembresiaPlanPage implements OnInit {

  selectedPlan: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    // Recuperar la membresía seleccionada previamente si existe
    const savedPlan = localStorage.getItem('selectedMembresia');
    if (savedPlan) {
      this.selectedPlan = savedPlan;
    }
  }

  saveSelectedPlan() {
    if (this.selectedPlan) {
      localStorage.setItem('selectedMembresia', this.selectedPlan);
      // Redirigir al usuario a la página de confirmación
      this.router.navigate(['/membresia-compra-confirmacion']);
    } else {
      // Mostrar un mensaje de error si no se seleccionó ningún plan
      alert('Por favor, selecciona un plan antes de continuar.');
    }
  }
}