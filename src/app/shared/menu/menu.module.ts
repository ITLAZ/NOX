import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports: [MenuComponent] // ✅ Esto permite que otros módulos lo usen
})
export class MenuModule {}