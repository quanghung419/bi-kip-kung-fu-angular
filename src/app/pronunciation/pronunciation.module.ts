import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PronunciationRoutingModule } from './pronunciation-routing.module';
import { PronunciationListComponent } from './pronunciation-list/pronunciation-list.component';

@NgModule({
  imports: [
    CommonModule,
    PronunciationRoutingModule
  ],
  declarations: [PronunciationListComponent]
})
export class PronunciationModule { }
