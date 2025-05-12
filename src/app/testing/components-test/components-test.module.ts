import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsTestPageRoutingModule } from './components-test-routing.module';

import { ComponentsTestPage } from './components-test.page';

import { MidCardModule } from 'src/app/shared/mid-card/mid-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsTestPageRoutingModule,
    MidCardModule,
  ],
  declarations: [ComponentsTestPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsTestPageModule {}
