import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialPageRoutingModule } from './historial-routing.module';

import { HistorialPage } from './historial.page';
import { MidCardComponent } from 'src/app/components/cards/mid-card/mid-card.component';
import { MidCardModule } from 'src/app/shared/mid-card/mid-card.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialPageRoutingModule,
    MidCardModule,
    ToolbarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HistorialPage]
})
export class HistorialPageModule {}
