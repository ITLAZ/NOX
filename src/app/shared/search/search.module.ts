import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SearchComponent } from '../../components/search/search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
