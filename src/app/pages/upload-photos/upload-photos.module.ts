import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadPhotosPageRoutingModule } from './upload-photos-routing.module';

import { UploadPhotosPage } from './upload-photos.page';

import { ToolbarModule } from 'src/app/shared/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadPhotosPageRoutingModule, 
    ToolbarModule
  ],
  declarations: [UploadPhotosPage]
})
export class UploadPhotosPageModule {}
