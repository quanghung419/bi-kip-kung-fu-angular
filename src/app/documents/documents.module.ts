import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DocumentsRoutingModule} from './documents-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DocComponent} from './doc/doc.component';
import {DocsComponent} from './docs/docs.component';
import {DocThumbComponent} from './docs/doc-thumb/doc-thumb.component';
import {DocThumbNewComponent} from './docs/doc-thumb-new/doc-thumb-new.component';
import {NewDocModalComponent} from './docs/new-doc-dialog/new-doc-dialog.component';

import {
  MatDialogModule, MatButtonModule, MatSlideToggleModule, MatInputModule, MatIconModule,
  MAT_PLACEHOLDER_GLOBAL_OPTIONS
} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NewDocDialogService} from './docs/new-doc-dialog/new-doc-dialog.service';
import { MainTranscriptComponent } from './doc/main-transcript/main-transcript.component';
import { SubTranscriptComponent } from './doc/sub-transcript/sub-transcript.component';
import { SentenceComponent } from './doc/sentence/sentence.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    DocumentsRoutingModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [
    DocComponent,
    DocsComponent,
    DocThumbComponent,
    DocThumbNewComponent,
    NewDocModalComponent,
    MainTranscriptComponent,
    SubTranscriptComponent,
    SentenceComponent
  ],
  providers: [
    NewDocDialogService
  ],
  entryComponents: [
    NewDocModalComponent
  ],
  exports: []
})
export class DocumentsModule {
}
