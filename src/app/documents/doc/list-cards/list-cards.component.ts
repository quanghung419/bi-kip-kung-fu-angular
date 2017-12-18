import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TranscriptModel} from '../transcript.model';
import {CardService} from '../card/card.service';
import {ParagraphModel} from '../paragraph/paragraph.model';
import {CardModel} from '../card/card.model';
import {CardsMap} from './map-card.model';
import {MainParagraphElementMap} from '../paragraph/main-paragraph-element-map.model';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit, OnChanges {


  @Input() transcript: TranscriptModel;
  private lstPhragraph: Array<ParagraphModel>;
  private currSelectdCard: any;
  private currentParagraph: ParagraphModel;
  private isFoldUpCard: boolean;

  constructor(private cardService: CardService, private cardsMap: CardsMap, private mainParagraphElementMap: MainParagraphElementMap) {
    this.onNewCardInit();
  }


  createCardInfoData(lstPhragraph: Array<ParagraphModel>) {
    for (const paragraphModel of lstPhragraph) {
      const paragraphIndex = paragraphModel.order;
      const mainPraEle = this.mainParagraphElementMap.getElementById(paragraphIndex);

      if (mainPraEle) {
        const cardModel = new CardModel(paragraphModel.order, mainPraEle.offSetTop);
        this.cardsMap.putCardIfNotExist(paragraphIndex, cardModel);
      }
    }
  }


  ngOnChanges(changes: SimpleChanges): void {
    const changeLstPhragraph = changes['lstPhragraph'];
    if (changeLstPhragraph) {
      console.log('Change lstPhragraph: ', changeLstPhragraph);
    }
  }

  ngOnInit() {
    this.lstPhragraph = this.transcript.lstPhragraph;

    this.createCardInfoData(this.lstPhragraph);

    this.cardService.onChangeSelectedCard((cardId: number) => {
      this.lstPhragraph = this.transcript.lstPhragraph;

      if (this.isFoldUpCard) {
        this.currentParagraph = null;
        this.isFoldUpCard = false;
        return;
      }

      let isMatch = false;
      this.lstPhragraph.forEach((paragraph) => {
        console.log('Check card on change selected card: ', paragraph);

        if (paragraph.order === cardId) {
          this.currentParagraph = paragraph;
          console.log('Set current card.');
          isMatch = true;
          this.isFoldUpCard = false;
        } else if (paragraph.rawParagraph.trim().length === 0 && paragraph.lstSentences.length === 0) {
          console.log('Delete new card when input nothing and change selected card ==>> ');
          this.deleteCard(paragraph.order);
        }
      });
      if (!isMatch) {
        this.currentParagraph = null;
      }

      console.log('Selected card: ', this.currentParagraph);
    });


    // Change position of other card (Not selected card)
    this.cardService.expandedSubject.subscribe((selectdCard: any) => {
      this.lstPhragraph = this.transcript.lstPhragraph;
      this.currSelectdCard = selectdCard;
      this.rearrangeCard(selectdCard);
    });
  }

  rearrangeCardToInitPosition() {
    this.lstPhragraph.forEach((paragraph) => {
      const cardModel: CardModel = this.cardsMap.getCardById(paragraph.order);
      if (cardModel) {
        cardModel.position = cardModel.initPosition;
      }
    });
  }

  isManualFoldUpCard(selectdCard): boolean {
    return selectdCard.selectedCardId === -1;
  }

  rearrangeCard(selectdCard) {
    this.sortData();
    console.log('Data after sort: ', this.lstPhragraph);
    this.rearrangeCardToInitPosition();

    if (this.isManualFoldUpCard(selectdCard)) {
      return;
    }

    const startIndexToPrev = selectdCard.selectedCardId;
    this.arrangeUpperPart(startIndexToPrev);

    const startIndexToNext = selectdCard.selectedCardId;
    this.arrangeTheBelowPart(startIndexToNext, selectdCard.expandedHeight);
  }

  arrangeUpperPart(startIndex: number) {
    for (let i = startIndex; i > 0; i--) {
      const aboveIndex = i - 1;
      const belowIndex = i;
      const cardAbove: CardModel = this.cardsMap.getCardById(aboveIndex);
      const cardBelow: CardModel = this.cardsMap.getCardById(belowIndex);

      if (!cardAbove || !cardBelow) {
        continue;
      }

      const bottomCardAbove = cardAbove.initPosition + 44;
      const gapValue = bottomCardAbove - cardBelow.initPosition + 44 + 30;
      if (gapValue > 0) {
        const cardModel: CardModel = this.cardsMap.getCardById(aboveIndex);
        if (cardModel) {
          cardModel.position = cardModel.initPosition;
          cardModel.position -= gapValue;
        }
      } else {
        break;
      }
    }
  }

  arrangeTheBelowPart(startIndex: number, expandedHeight: number) {
    const maxIndex = this.mainParagraphElementMap.getSize() > this.lstPhragraph.length
      ? this.mainParagraphElementMap.getSize() : this.lstPhragraph.length;

    for (let i = startIndex; i < maxIndex - 1; i++) {
      const aboveIndex = i;
      const belowIndex = i + 1;
      const cardAbove: CardModel = this.cardsMap.getCardById(aboveIndex);
      const cardBelow: CardModel = this.cardsMap.getCardById(belowIndex);

      if (!cardAbove || !cardBelow) {
        continue;
      }

      let bottomCardAbove: number;
      if (aboveIndex === startIndex) {
        bottomCardAbove = cardAbove.initPosition + expandedHeight;
      } else {
        bottomCardAbove = cardAbove.initPosition + 44;
      }

      const gapValue = bottomCardAbove - cardBelow.initPosition - 44 + 30;
      if (gapValue > 0) {
        const cardModel: CardModel = this.cardsMap.getCardById(belowIndex);
        if (cardModel) {
          cardModel.position = cardModel.initPosition;
          cardModel.position += gapValue;
        }
      } else {
        break;
      }
    }
  }

  clicked(paragraph: ParagraphModel) {
    if (this.isFoldUpCard) {
      this.cardService.changeSelectedCard(-1);
    } else {
      this.cardService.changeSelectedCard(paragraph.order);
    }
  }

  isSelectedCard(paragraph: ParagraphModel) {
    if (this.isFoldUpCard) {
      return false;
    }
    if (!paragraph || !this.currentParagraph) {
      return false;
    }
    return paragraph.order === this.currentParagraph.order;
  }

  getCardModel(paragraph) {
    return this.cardsMap.getCardById(paragraph.order);
  }

  foldUpCard() {
    this.isFoldUpCard = true;
  }

  deleteCard(cardId) {
    let lstParagraph: Array<ParagraphModel> = this.transcript.lstPhragraph;

    console.log('Before delete: ', lstParagraph.length);

    this.cardsMap.removeCardByKey(cardId);
    lstParagraph = lstParagraph.filter((paragraph) => {
      if (paragraph.order !== cardId) {
        return paragraph;
      }
    });

    console.log('After delete: ', lstParagraph.length);
    this.transcript.lstPhragraph = lstParagraph;
    if (!this.currSelectdCard || this.currSelectdCard.selectedCardId === cardId) {
      this.rearrangeCardToInitPosition();
    } else {
      this.rearrangeCard(this.currSelectdCard);
    }
  }

  onNewCardInit() {
    this.cardService.onNewCard((paragraphId) => {
      const paragraphModel: ParagraphModel = new ParagraphModel();
      paragraphModel.order = paragraphId;
      paragraphModel.rawParagraph = '';
      paragraphModel.lstSentences = [];


      const mainPraEle = this.mainParagraphElementMap.getElementById(paragraphId);
      const cardModel: CardModel = new CardModel(paragraphId, mainPraEle.offSetTop);
      cardModel.isNewCard = true;

      this.cardsMap.putCardIfNotExist(paragraphId, cardModel);
      this.transcript.lstPhragraph.push(paragraphModel);
      // Mark new card is selected
      this.cardService.changeSelectedCard(paragraphId);
    });
  }

  sortData() {
    this.lstPhragraph.sort((pragraph1, pragraph2) => {
      return pragraph1.order - pragraph2.order;
    });
  }

  updateTranscript(newParagModel) {
    if (newParagModel) {
      const paragraphId = newParagModel.order;


      let lstParagraph: Array<ParagraphModel> = this.transcript.lstPhragraph;

      console.log('Before update: ', lstParagraph.length);

      // this.cardsMap.removeCardByKey(cardId);
      lstParagraph = lstParagraph.filter((paragraph) => {
        if (paragraph.order !== paragraphId) {
          return paragraph;
        }
      });

      lstParagraph.push(newParagModel);

      console.log('After update: ', lstParagraph.length);
      this.transcript.lstPhragraph = lstParagraph;


    }
  }

}
