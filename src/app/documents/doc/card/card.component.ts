import {
  Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange,
  SimpleChanges
} from '@angular/core';
import {ParagraphModel} from '../paragraph/paragraph.model';
import {CardService} from './card.service';
import {CardModel} from './card.model';
import {ContentAnalysisService} from '../content-analysis.service';
import {WritingPracticeDialogService} from '../writing-practice-dialog/writing-practice-dialog.service';

export enum MOUSE_EVENT {
  MOUSE_OVER = 'mouseover'
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges, OnInit {

  @Input() paragraph: ParagraphModel;
  @Input() isSelectedCard: boolean;
  @Input() cardModel: CardModel;
  oldContent: string;
  isEditingMode: boolean;

  @Output()
  onDeleteCard: EventEmitter<number> = new EventEmitter();

  private rawContent: string;

  private isFoldUpCard: boolean;

  constructor(private elRef: ElementRef, private cardService: CardService,
              private contentAnalysisService: ContentAnalysisService, private writingPracticeDialogService: WritingPracticeDialogService) {
    this.isEditingMode = false;
    this.isFoldUpCard = false;
  }

  private _onFoldUpCard: EventEmitter<any> = new EventEmitter();

  @Output()
  get onFoldUpCard(): EventEmitter<any> {
    return this._onFoldUpCard;
  }

  // currentHeight: number;

  // isDraftCard: boolean;
  // function

  // @Output() onFoldUpCard: EventEmitter<number> = new EventEmitter();


  // @Output()
  // get onFoldUpCard(): EventEmitter<number> {
  //   return this._onFoldUpCard;
  // }

  ngOnChanges(changes: SimpleChanges) {
    const flagIsSelectedCard: SimpleChange = changes.isSelectedCard;
    if (flagIsSelectedCard.currentValue) {
      const self = this;
      setTimeout(function () {
        self.cardService.expandedSelectedCard(self.paragraph.order, self.elRef.nativeElement.children[0].clientHeight);
      }, 1);
    } else if (!this.isDraftCard()) {
      // If current card is not draft => change to edited mode
      this.isEditingMode = false;
    }

    if (this.isFoldUpCard) {
      this.isFoldUpCard = false;
      const self = this;
      setTimeout(function () {
        self.cardService.expandedSelectedCard(-1, -1);
      }, 1);
    }
  }

  ngOnInit(): void {
    // this.updateCurrentHeightOfCardInMap();
    // if (this.paragraph) {
    //   this.cardId = this.paragraph.order;
    // }
  }

  changeToEditingMode() {
    this.isEditingMode = true;
    this.oldContent = this.paragraph.rawParagraph;
    // this.currentHeight = ;
    console.log('Current Height: ', this.elRef.nativeElement.children[0].offsetHeight);
    // this.updateCurrentHeightOfCardInMap();
  }

  isDraftCard(): boolean {
    if (this.oldContent && this.rawContent && this.oldContent !== this.rawContent) {
      return this.oldContent.length > 0;
      // return true;
    }
    return false;
  }

  saveChange() {
    this.isEditingMode = false;
    this.oldContent = null;
    if (this.rawContent) {
      const paragraphModel = this.contentAnalysisService.getParagraphData(this.paragraph.order, this.rawContent);
      console.log('Convert paragraph: ', paragraphModel);
      this.paragraph = paragraphModel;
    }
  }

  discardChange() {
    this.isEditingMode = false;
    this.oldContent = null;
  }

  // updateCurrentHeightOfCardInMap() {
  // setTimeout(function (this) {
  // const currentHeight = this.elRef.nativeElement.children[0].offsetHeight;
  // this.cardsMap.updateCurrentHeightOfCard(this.paragraph.order, currentHeight);
  // this.getCurrHeight(this);
  // }, 100);
  // }

  // getCurrHeight(seft) {
  //   const currentHeight = seft.elRef.nativeElement.children[0].offsetHeight;
  //   seft.cardsMap.updateCurrentHeightOfCard(this.paragraph.order, currentHeight);
  // }

  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked - Current Height: ', this.paragraph.order, this.elRef.nativeElement.children[0].offsetHeight);
  //   this.updateCurrentHeightOfCardInMap();
  // }

  toggleCard() {
    if (this.isSelectedCard) {
      // this.isSelectedCard = false;
      // this.cardService.changeSelectedCard(-1);
      this._onFoldUpCard.emit(this.paragraph.order);
      this.isFoldUpCard = true;
    }
    // this.isFoldUpCard = !this.isFoldUpCard;
    // this.cardService.changeSelectedCard(-1);
  }

  onChangeContent(content) {
    console.log('New content of card\'s transcript: ', content);
    this.rawContent = content;
  }

  slideShowThisCard() {
    this.writingPracticeDialogService.practiceCard(this.paragraph.order);
  }

  deleteCard() {
    const result = confirm('Are you sure to delete this card?');
    if (result) {
      // this.cardService.deleteCard(this.paragraph.order);
      this.onDeleteCard.emit(this.paragraph.order);
    }
  }

  mappingMainParagraph(event) {
    if (event.type === 'mouseover') {
      this.cardService.hoverCardTitle(this.paragraph.order);
    } else if (event.type === 'mouseout') {
      this.cardService.hoverCardTitle(-1);
    }
  }

}
