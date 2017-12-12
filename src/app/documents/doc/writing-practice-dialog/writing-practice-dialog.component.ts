import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TranscriptModel} from "../transcript.model";
import {ParagraphModel} from "../paragraph/paragraph.model";

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  DOWN_ARROW = 40,
  SPACE = 32,
  ENTER = 13,
  ALT = 18
}

@Component({
  selector: 'app-writing-practice-dialog',
  templateUrl: './writing-practice-dialog.component.html',
  styleUrls: ['./writing-practice-dialog.component.css']
})
export class WritingPracticeDialogComponent implements OnInit {

  mainTranscript: TranscriptModel;
  subTranscript: TranscriptModel;
  currFrontParagraph: ParagraphModel;
  currBackParagraph: ParagraphModel;
  private currentNum: number;

  constructor(public dialogRef: MatDialogRef<WritingPracticeDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.currentNum = 1;
    this.mainTranscript = data.mainTranscript;
    this.subTranscript = data.subTranscript;
    console.log('Dialog data: ', this.mainTranscript, this.subTranscript);

    this.currFrontParagraph = this.mainTranscript.lstPhragraph.pop();
    this.currBackParagraph = this.subTranscript.lstPhragraph.pop();
  }

  ngOnInit() {
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event.keyCode);

    switch (event.keyCode) {
      case KEY_CODE.RIGHT_ARROW:
        this.nextCard();
        break;
      case KEY_CODE.LEFT_ARROW:
        this.prevCard();
        break;
      case KEY_CODE.UP_ARROW:
        break;
      case KEY_CODE.DOWN_ARROW:
        break;
      case KEY_CODE.SPACE:
        break;
      case KEY_CODE.ENTER:
        break;
      default:
        break;

    }
  }


  prevCard() {
    if (this.currentNum > 1) {
      this.currentNum--;
    } else {
      this.currentNum = 3;
    }
  }

  nextCard() {
    if (this.currentNum < 3) {
      this.currentNum++;
    } else {
      this.currentNum = 1;
    }
  }

  isChecked(checkboxNum): boolean {
    // console.log('checkboxNum: ', checkboxNum, ' ,currentNum: ', this.currentNum);
    if (this.currentNum === checkboxNum) {
      return true;
    }
    return false;
  }

  isPrev(cardTempNum): boolean {
    switch (this.currentNum) {
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
    switch (this.currentNum) {
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

}
