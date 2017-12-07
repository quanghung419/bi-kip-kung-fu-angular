import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranscriptModel} from './transcript.model';
import {TranscriptService} from './transcript.service';
import {MatMenu, MatMenuTrigger} from "@angular/material";
import {DocService} from "./doc.service";
import {MainTranscriptService} from "./main-transcript/main-transcript.service";

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  enTranscript: TranscriptModel;
  vnTranscript: TranscriptModel;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  // @ViewChild(MatMenu) menu: MatMenu;
  topPosition: number;
  leftPosition: number;
  isContextMenuForMainParagraph: boolean;
  mainTranscriptEditingMode: boolean;
  private docId: string;
  private triggerOldHandleClick: any;

  constructor(private route: ActivatedRoute, private transcriptService: TranscriptService,
              private docService: DocService, private mainTranscriptService: MainTranscriptService) {
    route.params.subscribe(params => {
      this.docId = params['docId'];
    });

    this.topPosition = 0;
    this.leftPosition = 0;
  }


  ngOnInit() {
    this.getTranscript();
    // console.log('DocId: ', this.docId);
    // console.log('En Transcript: ', this.enTranscript);
    // console.log('Vn Transcript: ', this.vnTranscript);

    this.triggerOldHandleClick = this.trigger._handleClick.bind(this.trigger);
    this.trigger._handleClick = this.onClickButton;

    this.docService.rightClickSentenceSubject.subscribe((info: any) => {
      this.showContextMenu(info.$event);
      this.isContextMenuForMainParagraph = info.isMainSentence;
    });

    // sentenceService.subject.subscribe((info: any) => {
    //   let isMatch = false;
    //   this.paragraph.lstSentences.forEach((sentence) => {
    //     if (this.paragraph.order === info.parOrder && sentence.order === info.order) {
    //       this.currentSentence = sentence;
    //       console.log('track');
    //       isMatch = true;
    //     }
    //   });
    //   if (!isMatch) {
    //     this.currentSentence = null;
    //   }
    // });

  }

  getTranscript(): void {
    // this.enTranscript = this.transcriptService.getEnTranscript();
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
    // this.menu.xPosition = 100;
    // 'screenX: 2492, screenY: 327'
    this.topPosition = $event.pageY;
    this.leftPosition = $event.pageX;
    console.log(this.topPosition, this.leftPosition);
    // MenuPositionX
    // if ($event.which === 3) {
    // }
    console.log('Right click on sentence and catch up in parent', $event);
  }

  isHiddenContextMenu(): boolean {
    return !this.trigger.menuOpen;
  }

  // changeToEditMode() {
  //   if (this.isContextMenuForMainParagraph) {
  //     // alert('Change to edit mode: MAIN');
  //     this.mainTranscriptEditingMode = true;
  //   } else {
  //     alert('Change to edit mode: SUB');
  //     this.mainTranscriptEditingMode = false;
  //   }
  // }


  editModeMainTrascript() {
    // alert('Edit main transcript');
    this.mainTranscriptEditingMode = true;
  }

  saveModeMainTrascript() {
    this.mainTranscriptEditingMode = false;
    const transcriptModel = this.mainTranscriptService.getTranscriptData();
    console.log('transcript: ', transcriptModel);
    this.enTranscript = transcriptModel;
  }

}

