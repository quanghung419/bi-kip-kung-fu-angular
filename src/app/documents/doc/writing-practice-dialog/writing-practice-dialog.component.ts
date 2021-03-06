import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TranscriptModel} from '../transcript.model';
import {ParagraphModel} from '../paragraph/paragraph.model';
import {PracticalCardModel} from '../practical-card/practical-card.model';
import {CARD_LANGUAGE} from './writing-practice-dialog-config.model';
import {KEY_CODE} from '../../../_shared/constants/key-code.enum';
import {SentenceService} from '../sentence/sentence.service';

@Component({
  selector: 'app-writing-practice-dialog',
  templateUrl: './writing-practice-dialog.component.html',
  styleUrls: ['./writing-practice-dialog.component.css']
})
export class WritingPracticeDialogComponent implements OnInit {

  private frontTranscript: TranscriptModel;
  private backTranscript: TranscriptModel;

  private firstPracticalCardData: PracticalCardModel;
  private secondPracticalCardData: PracticalCardModel;
  private thirdPracticalCardData: PracticalCardModel;

  private keyEventInfo: any;
  private dialogConfig: any;

  private maxParagraph: number;
  private currParagraphId: number;

  private maxSentence: number;
  private currSentenceId: number;

  private currentSlideIndex: number;

  constructor(public dialogRef: MatDialogRef<WritingPracticeDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private sentenceService: SentenceService) {
    this.currentSlideIndex = 1;

    console.log('Dialog data: ', this.frontTranscript, this.backTranscript);
    console.log('Dialog Config: initParagraphId=', data.initParagraphId, ' ,dialogConfig=', data.dialogConfig);

    this.currParagraphId = data.initParagraphId;
    this.dialogConfig = data.dialogConfig;
    this.currSentenceId = -1;
    if (this.dialogConfig && this.dialogConfig.frontSide === CARD_LANGUAGE.VIETNAMESE) {
      this.frontTranscript = data.subTranscript;
      this.backTranscript = data.mainTranscript;
    } else {
      this.frontTranscript = data.mainTranscript;
      this.backTranscript = data.subTranscript;
    }
    this.resetSelectedSentence();

    this.maxParagraph = this.frontTranscript.lstPhragraph.length > this.backTranscript.lstPhragraph.length
      ? this.frontTranscript.lstPhragraph.length : this.backTranscript.lstPhragraph.length;


    this.firstPracticalCardData = this.createDataOfPracticalCard(this.currParagraphId);
    this.secondPracticalCardData = this.firstPracticalCardData;
    this.thirdPracticalCardData = this.firstPracticalCardData;

    this.maxSentence = this.firstPracticalCardData.backParagraph.lstSentences.length <
    this.firstPracticalCardData.frontParagraph.lstSentences.length ?
      this.firstPracticalCardData.frontParagraph.lstSentences.length : this.firstPracticalCardData.backParagraph.lstSentences.length;
  }

  isTheEndCard(cardId: number): boolean {
    return cardId === -1 || cardId === this.maxParagraph;
  }

  setCurrData() {
    if (this.isTheEndCard(this.currParagraphId)) {
      this.resetSelectedSentence();
      this.currSentenceId = -1;
      switch (this.currentSlideIndex) {
        case 1:
          this.firstPracticalCardData = null;
          break;
        case 2:
          this.secondPracticalCardData = null;
          break;
        case 3:
          this.thirdPracticalCardData = null;
          break;
      }
      return;
    }

    const tempData = this.createDataOfPracticalCard(this.currParagraphId);

    let maxSenOfFrontSide = 0;
    let maxSenOfBackSide = 0;

    if (tempData.backParagraph && tempData.backParagraph.lstSentences) {
      maxSenOfBackSide = tempData.backParagraph.lstSentences.length;
    }
    if (tempData.frontParagraph && tempData.frontParagraph.lstSentences) {
      maxSenOfFrontSide = tempData.frontParagraph.lstSentences.length;
    }

    this.maxSentence = maxSenOfBackSide < maxSenOfFrontSide ? maxSenOfBackSide : maxSenOfFrontSide;
    console.log('Max Sentence: ' + this.maxSentence + ' ,Current Paragraph Id: ' + this.currParagraphId);
    this.currSentenceId = -1;
    switch (this.currentSlideIndex) {
      case 1:
        this.firstPracticalCardData = tempData;
        break;
      case 2:
        this.secondPracticalCardData = tempData;
        break;
      case 3:
        this.thirdPracticalCardData = tempData;
        break;
    }
    this.resetSelectedSentence();
  }

  resetSelectedSentence() {
    this.sentenceService.changeSentence(-1, -1, true);
  }

  markSelectedSentence(paragraphId: number, sentenceId: number) {
    this.sentenceService.changeSentence(paragraphId, sentenceId, true);
  }

  createDataOfPracticalCard(paragraphId: number): PracticalCardModel {
    const frontParagraph: ParagraphModel = this.findParagraphById(this.frontTranscript.lstPhragraph, paragraphId);
    const backParagraph: ParagraphModel = this.findParagraphById(this.backTranscript.lstPhragraph, paragraphId);
    return new PracticalCardModel(frontParagraph, backParagraph);
  }

  findParagraphById(lstPhragraph: Array<ParagraphModel>, paragraphId): ParagraphModel {
    for (let i = 0; i < lstPhragraph.length; i++) {
      const paragraph: ParagraphModel = lstPhragraph[i];
      if (paragraph && paragraph.order === paragraphId) {
        return paragraph;
      }
    }
    return null;
  }

  ngOnInit() {
    this.keyEventInfo = null;
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUpEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case KEY_CODE.SPACE:
      case KEY_CODE.ENTER:
        event.preventDefault();
        this.revokeKeyEnventToChildren();
        break;
      default:
        break;
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDownEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case KEY_CODE.RIGHT_ARROW:
        this.nextCard();
        break;
      case KEY_CODE.LEFT_ARROW:
        this.prevCard();
        break;
      case KEY_CODE.UP_ARROW:
        if (this.currSentenceId > -1) {
          this.currSentenceId--;
        } else {
          this.currSentenceId = this.maxSentence - 1;
        }
        console.log('Current Sentence Id: ', this.currSentenceId, ' ,Current Paragraph Id: ', this.currParagraphId);
        this.markSelectedSentence(this.currParagraphId, this.currSentenceId);
        break;
      case KEY_CODE.DOWN_ARROW:
        if (this.currSentenceId < this.maxSentence - 1) {
          this.currSentenceId++;
        } else {
          this.currSentenceId = -1;
        }
        console.log('Current Sentence Id: ', this.currSentenceId, ' ,Current Paragraph Id: ', this.currParagraphId);
        this.markSelectedSentence(this.currParagraphId, this.currSentenceId);
        break;
      case KEY_CODE.SPACE:
      case KEY_CODE.ENTER:
        event.preventDefault();
        this.notifyKeyEventToChildren(event.keyCode);
        console.log('On Press SPACE on parent');
        break;
      default:
        break;
    }
  }

  notifyKeyEventToChildren(keyCode) {
    this.keyEventInfo = {};
    this.keyEventInfo.keyCode = keyCode;
    this.keyEventInfo.currNum = this.currentSlideIndex;
  }

  revokeKeyEnventToChildren() {
    this.keyEventInfo = null;
  }

  prevCard() {
    // Re-Index Slider
    if (this.currentSlideIndex > 1) {
      this.currentSlideIndex--;
    } else {
      this.currentSlideIndex = 3;
    }
    // Re-Index Paragraph
    if (this.currParagraphId >= 0) {
      this.currParagraphId--;
    } else if (this.currParagraphId === -1) {
      this.currParagraphId = this.maxParagraph - 1;
    }
    this.setCurrData();
  }

  nextCard() {
    // Re-Index Slider
    if (this.currentSlideIndex < 3) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 1;
    }
    // Re-Index Paragraph
    if (this.currParagraphId < this.maxParagraph) {
      this.currParagraphId++;
    } else if (this.currParagraphId === this.maxParagraph) {
      this.currParagraphId = 0;
    }
    this.setCurrData();
  }

  isChecked(checkboxNum): boolean {
    if (this.currentSlideIndex === checkboxNum) {
      return true;
    }
    return false;
  }

  isPrev(cardTempNum): boolean {
    switch (this.currentSlideIndex) {
      case 1:
        return cardTempNum === 3;
      case 2:
        return cardTempNum === 1;
      case 3:
        return cardTempNum === 2;
      default:
        return false;
    }
  }

  isNext(cardTempNum): boolean {
    switch (this.currentSlideIndex) {
      case 1:
        return cardTempNum === 2;
      case 2:
        return cardTempNum === 3;
      case 3:
        return cardTempNum === 1;
      default:
        return false;
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
