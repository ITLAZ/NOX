import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-entradas',
  templateUrl: './gestion-entradas.page.html',
  styleUrls: ['./gestion-entradas.page.scss'],
  standalone: false,

})
export class GestionEntradasPage implements OnInit {

  productName: string = '';
  productDescription: string = '';
  productPrice: string =  '';
  productQuantity: string = '';

  constructor() { }

  ngOnInit() {
  }

}
