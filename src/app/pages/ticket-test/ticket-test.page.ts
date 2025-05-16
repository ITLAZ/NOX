import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-ticket-test',
  templateUrl: './ticket-test.page.html',
  styleUrls: ['./ticket-test.page.scss'],
  standalone: false,
})
export class TicketTestPage implements OnInit {

  menu: any[] = [];
  
    constructor(
      private databaseService: DatabaseService,
      private cartService: CartService
    ) { }
  
    ngOnInit() {
      this.databaseService.fetchFirestoreCollection('entradasPruebas').subscribe(data => {
        this.menu = data;
      });
    }
    addToCart(item: any) {
      this.cartService.addToCart(item);
    }
}
