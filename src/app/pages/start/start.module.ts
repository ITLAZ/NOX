import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Aquí está NgIf incluido
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StartPageRoutingModule } from './start-routing.module';
import { StartPage } from './start.page';

@NgModule({
  imports: [
    CommonModule,          // Aquí se incluye NgIf automáticamente
    FormsModule,
    IonicModule,
    StartPageRoutingModule
  ],
  declarations: [StartPage]
})
export class StartPageModule {}
