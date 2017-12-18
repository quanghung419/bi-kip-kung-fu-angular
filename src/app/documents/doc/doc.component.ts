import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranscriptModel} from './transcript.model';
import {TranscriptService} from './transcript.service';
import {MatMenuTrigger} from '@angular/material';
import {DocService} from './doc.service';
import {MainTranscriptService} from './main-transcript/main-transcript.service';
import {WritingPracticeDialogService} from './writing-practice-dialog/writing-practice-dialog.service';
import {ToolbarService} from './toolbar/toolbar.service';
import {CardService} from './card/card.service';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  enTranscript: TranscriptModel;
  vnTranscript: TranscriptModel;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  topPosition: number;
  leftPosition: number;
  isContextMenuForMainParagraph: boolean;
  mainTranscriptEditingMode: boolean;
  private docId: string;
  private triggerOldHandleClick: any;

  constructor(private route: ActivatedRoute, private transcriptService: TranscriptService,
              private docService: DocService, private mainTranscriptService: MainTranscriptService,
              private writingPracticeDialogService: WritingPracticeDialogService, private toolbarService: ToolbarService) {
    route.params.subscribe(params => {
      this.docId = params['docId'];
    });

    this.topPosition = 0;
    this.leftPosition = 0;
  }


  ngOnInit() {
    this.getTranscript();
    this.triggerOldHandleClick = this.trigger._handleClick.bind(this.trigger);
    this.trigger._handleClick = this.onClickButton;

    this.docService.rightClickSentenceSubject.subscribe((info: any) => {
      this.showContextMenu(info.$event);
      this.isContextMenuForMainParagraph = info.isMainSentence;
    });

    this.writingPracticeDialogService.onPracticeCard((cardId: any) => {
      console.log('On Practice Specific Card: ' + cardId);
      this.writingPracticeDialogService.showDialog(this.enTranscript, this.vnTranscript, cardId, this.toolbarService.writingPracticeConfig);
    });
  }

  getTranscript(): void {
    this.transcriptService.getEnTranscript().then(transcript => {
        this.enTranscript = transcript;
      }
    );
    this.transcriptService.getVnTranscript().then(transcript => {
        this.vnTranscript = transcript;
      }
    );
  }

  onClickButton($event) {
    if ($event.which === 3) {
      this.triggerOldHandleClick($event);
    }
  }

  showContextMenu($event) {
    this.triggerOldHandleClick($event);
    this.topPosition = $event.pageY;
    this.leftPosition = $event.pageX;
    console.log(this.topPosition, this.leftPosition);
    console.log('Right click on sentence and catch up in parent', $event);
  }

  isHiddenContextMenu(): boolean {
    return !this.trigger.menuOpen;
  }

  editModeMainTrascript() {
    this.mainTranscriptEditingMode = true;
  }

  saveModeMainTrascript() {
    this.mainTranscriptEditingMode = false;
    const transcriptModel = this.mainTranscriptService.getTranscriptData();
    console.log('transcript: ', transcriptModel);
    if (transcriptModel) {
      this.enTranscript = transcriptModel;
    }
  }

  showDialogWritingPractice(config) {
    this.writingPracticeDialogService.showDialog(this.enTranscript, this.vnTranscript, 0, config);
  }

}

