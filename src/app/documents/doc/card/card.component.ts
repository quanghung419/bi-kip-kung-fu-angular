import {
  Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange,
  SimpleChanges
} from '@angular/core';
import {ParagraphModel} from '../paragraph/paragraph.model';
import {CardService} from './card.service';
import {CardModel} from './card.model';
import {ContentAnalysisService} from '../content-analysis.service';
import {WritingPracticeDialogService} from '../writing-practice-dialog/writing-practice-dialog.service';
import {ParagraphService} from "../paragraph/paragraph.service";

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
              private contentAnalysisService: ContentAnalysisService,
              private writingPracticeDialogService: WritingPracticeDialogService,
              private paragraphService: ParagraphService) {
    this.isEditingMode = false;
    this.isFoldUpCard = false;
  }

  private _onFoldUpCard: EventEmitter<any> = new EventEmitter();

  @Output()
  get onFoldUpCard(): EventEmitter<any> {
    return this._onFoldUpCard;
  }

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

    // Trigger to rearrange card
    if (this.paragraph.isNewCard) {
      this.isSelectedCard = true;
      this.isEditingMode = true;
      this.paragraph.isNewCard = false;
      const self = this;
      setTimeout(function () {
        self.cardService.expandedSelectedCard(self.paragraph.order, self.elRef.nativeElement.children[0].clientHeight);
      }, 1);
    }
  }

  ngOnInit(): void {
  }

  changeToEditingMode() {
    this.isEditingMode = true;
    this.oldContent = this.paragraph.rawParagraph;
    console.log('Current Height: ', this.elRef.nativeElement.children[0].offsetHeight);
  }

  isDraftCard(): boolean {
    if (this.oldContent && this.rawContent && this.oldContent !== this.rawContent) {
      return this.oldContent.length > 0;
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

  toggleCard() {
    if (this.isSelectedCard) {
      this._onFoldUpCard.emit(this.paragraph.order);
      this.isFoldUpCard = true;
    }
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
      this.paragraphService.matchingWithParagraph(this.paragraph.order);
    } else if (event.type === 'mouseout') {
      this.paragraphService.matchingWithParagraph(-1);
    }
  }

}
