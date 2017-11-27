import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TinyCardRoutingModule } from './tiny-card-routing.module';
import { CardCollectionsComponent } from './card-collections/card-collections.component';

@NgModule({
  imports: [
    CommonModule,
    TinyCardRoutingModule
  ],
  declarations: [CardCollectionsComponent]
})
export class TinyCardModule { }
