import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BannerComponent } from 'src/app/components/banner/banner.component';


@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BannerComponent]
})
export class BannerModule { }
