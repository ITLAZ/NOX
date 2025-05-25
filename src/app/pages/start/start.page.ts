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
        style({ opacity: 0, transform: 'scale(0.92)' }),
        sequence([
          animate('400ms cubic-bezier(.4,0,.2,1)', style({ opacity: 1, transform: 'scale(1.04)' })),
          animate('400ms cubic-bezier(.4,0,.2,1)', style({ transform: 'scale(0.98)' })),
          animate('400ms cubic-bezier(.4,0,.2,1)', style({ transform: 'scale(1.02)' })),
          animate('400ms cubic-bezier(.4,0,.2,1)', style({ transform: 'scale(1)' })),
        ])
      ]),
      transition(':leave', [
        animate('400ms cubic-bezier(.4,0,.2,1)', style({ opacity: 0, transform: 'scale(0.95)' }))
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(60px)', opacity: 0 }),
        animate('700ms 100ms cubic-bezier(.4,0,.2,1)', style({ transform: 'translateY(0)', opacity: 1 }))
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