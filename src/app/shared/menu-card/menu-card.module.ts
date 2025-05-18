import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuCardComponent } from 'src/app/components/cards/menu-card/menu-card.component';


@NgModule({
  declarations: [
    MenuCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    MenuCardComponent
  ]
})
export class MenuCardModule { }
