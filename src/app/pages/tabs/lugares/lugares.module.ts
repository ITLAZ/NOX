import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LugaresPageRoutingModule } from './lugares-routing.module';
import { LugaresPage } from './lugares.page';

import { FilterActionsModule } from 'src/app/shared/filter-actions/filter-actions.module';
import { MidCardModule } from 'src/app/shared/mid-card/mid-card.module';
import { ActionCardModule } from 'src/app/shared/action-card/action-card.module';
import { MiniCardModule } from 'src/app/shared/mini-card/mini-card.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugaresPageRoutingModule,
    MidCardModule,
    ActionCardModule,
    MiniCardModule,
    ToolbarModule,
    FilterActionsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [LugaresPage]
})
export class LugaresPageModule {}
