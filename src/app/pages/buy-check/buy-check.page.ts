import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-check',
  templateUrl: './buy-check.page.html',
  styleUrls: ['./buy-check.page.scss'],
  standalone: false
})
export class BuyCheckPage implements OnInit {

  subtotal: number = 0;
  commission: number = 5;
  discountPercentage: number = 0;
  discountAmount: number = 0;
  total: number = 0;
  items: any[] = [];

  coupons = [
    { label: 'Sin cupón', value: 0 },
    { label: 'Cupón 10%', value: 10 },
    { label: 'Cupón 15%', value: 15 },
    { label: 'Cupón 20%', value: 20 },
  ];

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state;
    this.subtotal = state?.['total'] || 0;
    this.items = state?.['items'] || [];
    this.calculateTotal();
  }

  ngOnInit() {}

  onCouponChange(value: number) {
    this.discountPercentage = value;
    this.calculateTotal();
  }

  calculateTotal() {
    this.discountAmount = (this.discountPercentage / 100) * this.subtotal;
    this.total = this.subtotal - this.discountAmount + this.commission;
  }
}
