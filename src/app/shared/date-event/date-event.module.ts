import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DateEventComponent } from 'src/app/components/date-event/date-event.component';


@NgModule({
  declarations: [DateEventComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [DateEventComponent],
})
export class DateEventModule { }
