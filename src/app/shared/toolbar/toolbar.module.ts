import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { FilterModalModule } from '../filter-modal/filter-modal.module'; // Asegúrate de que esta ruta sea correcta

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    IonicModule,
    FilterModalModule, // Importante
  ],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
