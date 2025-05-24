import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-aniadir-menu',
  templateUrl: './aniadir-menu.page.html',
  styleUrls: ['./aniadir-menu.page.scss'],
  standalone: false,
})
export class AniadirMenuPage implements OnInit {

  productName: string = '';
  productDescription: string = '';
  productPrice: string =  '';
  images: (string | null)[] = [null, null, null]; 

  constructor() { }

  ngOnInit() {
  }

}
