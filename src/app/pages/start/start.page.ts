import { Component, OnInit } from '@angular/core';
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
          animate('300ms ease-in-out', style({ transform: 'scale(1.5)' })),
          animate('300ms ease-in-out', style({ transform: 'scale(1)' })),
        ])
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0 }))
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
  showLogo = true;
  showWelcome = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.showLogo = false;
      setTimeout(() => {
        this.showWelcome = true;
      }, 500);
    }, 3000);
  }
}