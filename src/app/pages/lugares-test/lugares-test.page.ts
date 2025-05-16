import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-lugares-test',
  templateUrl: './lugares-test.page.html',
  styleUrls: ['./lugares-test.page.scss'],
  standalone: false
})
export class LugaresTestPage implements OnInit {

  menu: any[] = [];

  constructor(
    private databaseService: DatabaseService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.databaseService.fetchFirestoreCollection('menuPruebas').subscribe(data => {
      this.menu = data;
    });
  }
  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}
