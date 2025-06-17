import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BotonComponent } from 'src/app/components/boton/boton.component';



@NgModule({
  declarations: [BotonComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [BotonComponent],
})
export class BotonModule { }
