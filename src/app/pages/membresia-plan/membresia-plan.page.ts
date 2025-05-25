import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membresia-plan',
  templateUrl: './membresia-plan.page.html',
  styleUrls: ['./membresia-plan.page.scss'],
  standalone: false,
})
export class MembresiaPlanPage implements OnInit {

  selectedPlan: string = '';

  constructor() { }

  ngOnInit() {
  }

}
