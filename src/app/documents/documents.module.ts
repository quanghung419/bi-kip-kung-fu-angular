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
  MatDialogModule, MatButtonModule, MatSlideToggleModule, MatInputModule, MatIconModule, MatTooltipModule,
  MatMenuModule,
} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NewDocDialogService} from './docs/new-doc-dialog/new-doc-dialog.service';
import {MainTranscriptComponent} from './doc/main-transcript/main-transcript.component';
import {SubTranscriptComponent} from './doc/sub-transcript/sub-transcript.component';
import {SentenceComponent} from './doc/sentence/sentence.component';
import {ParagraphComponent} from './doc/paragraph/paragraph.component';
import {TranscriptService} from './doc/transcript.service';
import {SentenceService} from './doc/sentence/sentence.service';
import {CardComponent} from './doc/card/card.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ListCardsComponent} from './doc/list-cards/list-cards.component';
import {CardService} from './doc/card/card.service';
import {ParagraphService} from './doc/paragraph/paragraph.service';
import {DocService} from './doc/doc.service';
import {ToolbarComponent} from './doc/toolbar/toolbar.component';
import {ListCardsService} from './doc/list-cards/list-cards.service';
import {CardsMap} from './doc/list-cards/map-card.model';
import {MainTranscriptService} from './doc/main-transcript/main-transcript.service';
import {ContentAnalysisService} from './doc/content-analysis.service';
import {WritingPracticeDialogComponent} from './doc/writing-practice-dialog/writing-practice-dialog.component';
import {WritingPracticeDialogService} from './doc/writing-practice-dialog/writing-practice-dialog.service';
import {PracticalCardComponent} from './doc/practical-card/practical-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToolbarService } from './doc/toolbar/toolbar.service';
import { TrianglifyService } from '../_shared/service/trianglify.service';
import {MainParagraphElementMap} from './doc/paragraph/main-paragraph-element-map.model';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DocumentsRoutingModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    AngularFontAwesomeModule,
    MatMenuModule
  ],
  declarations: [
    DocComponent,
    DocsComponent,
    DocThumbComponent,
    DocThumbNewComponent,
    NewDocModalComponent,
    MainTranscriptComponent,
    SubTranscriptComponent,
    SentenceComponent,
    ParagraphComponent,
    CardComponent,
    ListCardsComponent,
    ToolbarComponent,
    WritingPracticeDialogComponent,
    PracticalCardComponent
  ],
  providers: [
    NewDocDialogService,
    TranscriptService,
    SentenceService,
    CardService,
    ParagraphService,
    DocService,
    ListCardsService,
    CardsMap,
    MainParagraphElementMap,
    MainTranscriptService,
    ContentAnalysisService,
    WritingPracticeDialogService,
    ToolbarService,
    TrianglifyService
  ],
  entryComponents: [
    NewDocModalComponent,
    WritingPracticeDialogComponent
  ],
  exports: []
})
export class DocumentsModule {
}
