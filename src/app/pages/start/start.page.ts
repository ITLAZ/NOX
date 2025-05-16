import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, style, animate, transition, sequence } from '@angular/animations';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
  standalone: false,
  animations: [
    trigger('logoAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        sequence([
          animate('300ms ease-in-out', style({ opacity: 1, transform: 'scale(1.05)' })),
          animate('300ms ease-in-out', style({ transform: 'scale(1)' })),
          animate('300ms ease-in-out', style({ transform: 'scale(1.03)' })),
          animate('300ms ease-in-out', style({ transform: 'scale(1)' })),
          animate('2100ms ease-in-out', style({})) // Espera el resto de los 3 segundos
        ]),
      ]),
      transition(':leave', [
        style({ opacity: 1 }), // Comenzar con opacidad 1 para la transición
        animate('500ms ease-in-out', style({ opacity: 0 })) // Desvanecer el logo
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(100px)', opacity: 0 }),
        animate('600ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class StartPage implements OnInit {
  @ViewChild('logoContainer') logoContainer!: ElementRef; // Para manipulación directa del DOM

  constructor() { }

  showLogo = true;
  showWelcome = false;

  ngOnInit() {
    setTimeout(() => {
      this.showLogo = false; // Inicia la transición de salida del logo
      setTimeout(() => {
        this.showWelcome = true; // Muestra el contenido de bienvenida después de que el logo se desvanece
      }, 500); // Espera 500ms para que coincida con la duración del fadeOut
    }, 3000);
  }
}
