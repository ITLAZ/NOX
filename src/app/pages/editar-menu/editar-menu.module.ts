import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarMenuPageRoutingModule } from './editar-menu-routing.module';

import { EditarMenuPage } from './editar-menu.page';

import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarMenuPageRoutingModule,
    ToolbarModule
  ],
  declarations: [EditarMenuPage]
})
export class EditarMenuPageModule {}
