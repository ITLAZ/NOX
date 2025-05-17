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
  selectedItems: any[] = [];
  total: number = 0;

  constructor(
    private databaseService: DatabaseService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.databaseService.fetchFirestoreCollection('entradasPruebas').subscribe(data => {
      this.menu = data.map(item => ({ ...item, quantity: 0 }));
    });
  }

  increment(item: any) {
    item.quantity++;
    this.updateSelection(item);
  }

  decrement(item: any) {
    if (item.quantity > 0) {
      item.quantity--;
      this.updateSelection(item);
    }
  }

  updateSelection(item: any) {
    const index = this.selectedItems.findIndex(i => i.id === item.id);

    if (item.quantity > 0) {
      if (index > -1) {
        this.selectedItems[index].quantity = item.quantity;
      } else {
        this.selectedItems.push({ ...item });
      }
    } else if (index > -1) {
      this.selectedItems.splice(index, 1);
    }

    this.total = this.selectedItems.reduce((sum, i) => (i.price || i.precio || 0) * i.quantity + sum, 0);
  }

  addToCart() {
    for (const item of this.selectedItems) {
      this.cartService.addToCart({ ...item });
    }
    this.selectedItems = [];
    this.total = 0;
    this.menu.forEach(i => i.quantity = 0);
  }
}
