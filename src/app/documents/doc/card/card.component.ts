import {
  AfterViewChecked,
  Component, ElementRef, Input, OnChanges, OnInit, SimpleChange,
  SimpleChanges
} from '@angular/core';
import {ParagraphModel} from '../paragraph/paragraph.model';
import {CardService} from './card.service';
import {CardModel} from './card.model';
import {CardsMap} from "../list-cards/map-card.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges, OnInit {


  @Input() paragraph: ParagraphModel;

  @Input() isSelectedCard: boolean;

  @Input() cardModel: CardModel;

  // cardId: number;
  oldContent: string;

  isEditingMode: boolean;

  // currentHeight: number;

  // isDraftCard: boolean;
  function

  constructor(private elRef: ElementRef, private cardService: CardService, private cardsMap: CardsMap) {
    this.isEditingMode = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    const flagIsSelectedCard: SimpleChange = changes.isSelectedCard;
    if (flagIsSelectedCard.currentValue) {
      const self = this;
      setTimeout(function () {
        self.cardService.expandedSelectedCard(self.paragraph.order, self.elRef.nativeElement.children[0].clientHeight);
      }, 1);
    }
  }

  ngOnInit(): void {
    this.updateCurrentHeightOfCardInMap();
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
    if (this.oldContent) {
      return this.oldContent.length > 0;
    }
    return false;
  }

  saveChange() {
    this.isEditingMode = false;
    this.oldContent = null;
    this.updateCurrentHeightOfCardInMap();
  }

  discardChange() {
    this.isEditingMode = false;
    this.oldContent = null;
    this.updateCurrentHeightOfCardInMap();
  }

  updateCurrentHeightOfCardInMap() {
    // setTimeout(function (this) {
    const currentHeight = this.elRef.nativeElement.children[0].offsetHeight;
    this.cardsMap.updateCurrentHeightOfCard(this.paragraph.order, currentHeight);
    // this.getCurrHeight(this);
    // }, 100);
  }

  // getCurrHeight(seft) {
  //   const currentHeight = seft.elRef.nativeElement.children[0].offsetHeight;
  //   seft.cardsMap.updateCurrentHeightOfCard(this.paragraph.order, currentHeight);
  // }

  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked - Current Height: ', this.paragraph.order, this.elRef.nativeElement.children[0].offsetHeight);
  //   this.updateCurrentHeightOfCardInMap();
  // }

}
