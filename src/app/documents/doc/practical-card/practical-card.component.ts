import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ParagraphModel} from '../paragraph/paragraph.model';
import {KEY_CODE} from '../writing-practice-dialog/writing-practice-dialog.component';


@Component({
  selector: 'app-practical-card',
  templateUrl: './practical-card.component.html',
  styleUrls: ['./practical-card.component.css']
})
export class PracticalCardComponent implements OnInit {

  @Input() frontParagraph: ParagraphModel;
  @Input() backParagraph: ParagraphModel;

  flipped: boolean;
  isRorateBackSide: boolean;

  isExpanded: boolean;
  frontPosition: number;
  backPosition: number;

  isOpen: boolean;

  constructor() {
    this.flipped = false;
    this.isExpanded = false;
    // this.isRorateBackSide = true;
    this.isOpen = false;
  }

  ngOnInit() {
  }

  // @HostListener('window:keyup', ['$event'])
  // keyEvent(event: KeyboardEvent) {
  //   console.log(event.keyCode);
  //
  //   switch (event.keyCode) {
  //     // case KEY_CODE.RIGHT_ARROW:
  //     //   this.nextCard();
  //     //   break;
  //     // case KEY_CODE.LEFT_ARROW:
  //     //   this.prevCard();
  //     //   break;
  //     // case KEY_CODE.UP_ARROW:
  //     //   break;
  //     // case KEY_CODE.DOWN_ARROW:
  //     //   break;
  //     case KEY_CODE.ALT:
  //       event.stopPropagation();
  //       this.flipCard();
  //       break;
  //     case KEY_CODE.ENTER:
  //       event.stopPropagation();
  //       this.expandCard();
  //       break;
  //     default:
  //       break;
  //
  //   }
  // }

  flipCard() {
    this.flipped = !this.flipped;
    this.isRorateBackSide = true;
  }

  expandCard() {
    console.log('Click on button: EXPAND');

    // this.flipped = false;
    // this.isRorateBackSide = false;
    //
    // const maxLengthToMove = this.isExpanded ? 52 : 0;
    // this.frontPosition = -52 + maxLengthToMove;
    // this.backPosition = 52 - maxLengthToMove;
    //
    // // console.log('frontPosition: ', this.frontPosition, 'backPosition: ', this.backPosition);
    //
    this.isExpanded = !this.isExpanded;
  }

  // slideActionDetect($event) {
  //   console.log('Key Press: ', $event);
  // }

}
