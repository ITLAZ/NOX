import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesPageRoutingModule } from './favorites-routing.module';

import { FavoritesPage } from './favorites.page';
import { MidCardModule } from 'src/app/shared/mid-card/mid-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPageRoutingModule,
    MidCardModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule {}
