import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AniadirMenuPageRoutingModule } from './aniadir-menu-routing.module';
import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';
import { AniadirMenuPage } from './aniadir-menu.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AniadirMenuPageRoutingModule,
    ToolbarModule
  ],
  declarations: [AniadirMenuPage]
})
export class AniadirMenuPageModule {
}
