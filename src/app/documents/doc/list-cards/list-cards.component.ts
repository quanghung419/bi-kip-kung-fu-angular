import {AfterViewInit, Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {TranscriptModel} from '../transcript.model';
import {CardService} from '../card/card.service';
import {ParagraphModel} from '../paragraph/paragraph.model';
import {CardModel} from '../card/card.model';
import {ParagraphService} from '../paragraph/paragraph.service';
import {CardComponent} from '../card/card.component';
import {CardsMap} from './map-card.model';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {

  @Input() transcript: TranscriptModel;
  // @ViewChildren(CardComponent) cards: QueryList<CardComponent>;

  lstPhragraph: Array<ParagraphModel>;

  currSelectdCard: any;

  // mapCards: object;
  private currentParagraph: ParagraphModel;

  private isFoldUpCard: boolean;

  constructor(private cardService: CardService, private paragraphService: ParagraphService, private cardsMap: CardsMap) {
    // this.mapCards = {};
    // this.currentParagraph = ;
    // this.currentParagraph = undefined;
  }

  ngOnInit() {
    this.lstPhragraph = this.transcript.lstPhragraph;

    for (const mainPraEle of this.paragraphService.listMainPragraphElement) {
      for (const paragraphModel of this.lstPhragraph) {
        if (paragraphModel.order === mainPraEle.order) {
          this.cardsMap.putCardIfNotExist(paragraphModel.order, new CardModel(paragraphModel.order, mainPraEle.offSetTop));
          // this.cardsMap[paragraphModel.order] = this.cardsMap[paragraphModel.order] ||
          //   new CardModel(paragraphModel.order, mainPraEle.offSetTop);
          break;
        }
      }
    }

    this.cardService.subject.subscribe((cardId: number) => {
      // if (cardId === -1) {
      //   this.isFoldUpCard = true;
      //   return;
      // }

      if (this.isFoldUpCard) {
        this.currentParagraph = null;
        this.isFoldUpCard = false;
        return;
      }

      let isMatch = false;
      this.lstPhragraph.forEach((paragraph) => {
        if (paragraph.order === cardId) {
          this.currentParagraph = paragraph;
          console.log('Set current card.');
          isMatch = true;
          this.isFoldUpCard = false;
        }
      });
      if (!isMatch) {
        this.currentParagraph = null;
      }

      console.log('Selected card: ', this.currentParagraph);
    });


    // Change position of other card (Not selected card)
    this.cardService.expandedSubject.subscribe((selectdCard: any) => {
      this.currSelectdCard = selectdCard;
      this.rearrangeCard(selectdCard);
      // this.lstPhragraph.forEach((paragraph) => {
      //   // const cardModel: CardModel = this.cardsMap[paragraph.order];
      //   const cardModel: CardModel = this.cardsMap.getCardById(paragraph.order);
      //   cardModel.position = cardModel.initPosition;
      // });
      // this.rearrangeCardToInitPosition();
      //
      // // In case fold up a card
      // if (selectdCard.selectedCardId === -1) {
      //   return;
      // }
      //
      // const startIndex = selectdCard.selectedCardId;
      // for (let i = startIndex; i > 0; i--) {
      //   // const cardAbove: CardModel = this.cardsMap[i - 1];
      //   const cardAbove: CardModel = this.cardsMap.getCardById(i - 1);
      //   // const cardBelow: CardModel = this.cardsMap[i];
      //   const cardBelow: CardModel = this.cardsMap.getCardById(i);
      //
      //   // const cardComponent: CardComponent = this.getCardComponentById(cardAbove.order);
      //   // console.log('Card ABOVE height: ', cardComponent.currentHeight);
      //
      //   const bottomCardAbove = cardAbove.initPosition + 44;
      //   // const bottomCardAbove = cardAbove.initPosition + cardAbove.currentHeight;
      //   const gapValue = bottomCardAbove - cardBelow.initPosition + 44 + 30;
      //   if (gapValue > 0) {
      //     const abovePhragraph = this.lstPhragraph[i - 1];
      //     // const cardModel: CardModel = this.cardsMap[abovePhragraph.order];
      //     const cardModel: CardModel = this.cardsMap.getCardById(abovePhragraph.order);
      //     cardModel.position = cardModel.initPosition;
      //     cardModel.position -= gapValue;
      //     console.log('Change position of ABOVE card: ', abovePhragraph.order, ' ,initPosition: ',
      //       cardModel.initPosition, ' ,newPosition: ', cardModel.position);
      //   } else {
      //     break;
      //   }
      // }
      //
      // const startIndexNext = selectdCard.selectedCardId;
      // for (let i = startIndexNext; i < this.lstPhragraph.length - 1; i++) {
      //   // const cardAbove: CardModel = this.cardsMap[i];
      //   const cardAbove: CardModel = this.cardsMap.getCardById(i);
      //   // const cardBelow: CardModel = this.cardsMap[i + 1];
      //   const cardBelow: CardModel = this.cardsMap.getCardById(i + 1);
      //
      //   let bottomCardAbove: number;
      //   if (i === startIndexNext) {
      //     bottomCardAbove = cardAbove.initPosition + selectdCard.expandedHeight;
      //   } else {
      //     bottomCardAbove = cardAbove.initPosition + 44;
      //   }
      //
      //   const gapValue = bottomCardAbove - cardBelow.initPosition - 44 + 30;
      //   if (gapValue > 0) {
      //     const belowPhragraph = this.lstPhragraph[i + 1];
      //     // const cardModel: CardModel = this.cardsMap[belowPhragraph.order];
      //     const cardModel: CardModel = this.cardsMap.getCardById(belowPhragraph.order);
      //     cardModel.position = cardModel.initPosition;
      //     cardModel.position += gapValue;
      //     console.log('Change position of BELOW card: ', belowPhragraph.order, ' ,initPosition: ',
      //       cardModel.initPosition, ' ,newPosition: ', cardModel.position);
      //   } else {
      //     break;
      //   }
      // }
    });
  }

  rearrangeCardToInitPosition() {
    this.lstPhragraph.forEach((paragraph) => {
      // const cardModel: CardModel = this.cardsMap[paragraph.order];
      const cardModel: CardModel = this.cardsMap.getCardById(paragraph.order);
      if (cardModel) {
        cardModel.position = cardModel.initPosition;
      }
    });
  }

  rearrangeCard(selectdCard) {
    this.rearrangeCardToInitPosition();

    // In case fold up a card
    if (selectdCard.selectedCardId === -1) {
      return;
    }

    const startIndex = selectdCard.selectedCardId;
    for (let i = startIndex; i > 0; i--) {
      // const cardAbove: CardModel = this.cardsMap[i - 1];
      const cardAbove: CardModel = this.cardsMap.getCardById(i - 1);
      // const cardBelow: CardModel = this.cardsMap[i];
      const cardBelow: CardModel = this.cardsMap.getCardById(i);

      // const cardComponent: CardComponent = this.getCardComponentById(cardAbove.order);
      // console.log('Card ABOVE height: ', cardComponent.currentHeight);

      const bottomCardAbove = cardAbove.initPosition + 44;
      // const bottomCardAbove = cardAbove.initPosition + cardAbove.currentHeight;
      const gapValue = bottomCardAbove - cardBelow.initPosition + 44 + 30;
      if (gapValue > 0) {
        const abovePhragraph = this.lstPhragraph[i - 1];
        // const cardModel: CardModel = this.cardsMap[abovePhragraph.order];
        const cardModel: CardModel = this.cardsMap.getCardById(abovePhragraph.order);
        cardModel.position = cardModel.initPosition;
        cardModel.position -= gapValue;
        console.log('Change position of ABOVE card: ', abovePhragraph.order, ' ,initPosition: ',
          cardModel.initPosition, ' ,newPosition: ', cardModel.position);
      } else {
        break;
      }
    }

    const startIndexNext = selectdCard.selectedCardId;
    for (let i = startIndexNext; i < this.lstPhragraph.length - 1; i++) {
      // const cardAbove: CardModel = this.cardsMap[i];
      const cardAbove: CardModel = this.cardsMap.getCardById(i);
      // const cardBelow: CardModel = this.cardsMap[i + 1];
      const cardBelow: CardModel = this.cardsMap.getCardById(i + 1);

      let bottomCardAbove: number;
      if (i === startIndexNext) {
        bottomCardAbove = cardAbove.initPosition + selectdCard.expandedHeight;
      } else {
        bottomCardAbove = cardAbove.initPosition + 44;
      }

      const gapValue = bottomCardAbove - cardBelow.initPosition - 44 + 30;
      if (gapValue > 0) {
        const belowPhragraph = this.lstPhragraph[i + 1];
        // const cardModel: CardModel = this.cardsMap[belowPhragraph.order];
        const cardModel: CardModel = this.cardsMap.getCardById(belowPhragraph.order);
        cardModel.position = cardModel.initPosition;
        cardModel.position += gapValue;
        console.log('Change position of BELOW card: ', belowPhragraph.order, ' ,initPosition: ',
          cardModel.initPosition, ' ,newPosition: ', cardModel.position);
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
    // console.log('getCardModel: ', paragraph.order);
    // if (!paragraph) {
    //   return null;
    // }
    return this.cardsMap.getCardById(paragraph.order);
  }

  // ngAfterViewInit() {
  //   this.cards.forEach((cardInstance) => {
  //     console.log(cardInstance);
  //   });
  //   this.cards.changes.subscribe((card) => {
  //     console.log('@Child: card change: ', card);
  //   });
  // }

  // getCardComponentById(cardId: number): CardComponent {
  //   for (let i = 0; i < this.cards.length; i++) {
  //     const cardComponent: CardComponent = this.cards._results[i];
  //     if (cardComponent.cardId === cardId) {
  //       return cardComponent;
  //     }
  //   }
  // }

  foldUpCard($event) {
    // let isMatch = false;
    // this.lstPhragraph.forEach((paragraph) => {
    //   if (paragraph.order === $event) {
    //     this.currentParagraph = paragraph;
    //     console.log('Set current card.');
    //     isMatch = true;
    //     this.isFoldUpCard = false;
    //   }
    // });
    // if (!isMatch) {
    // this.currentParagraph = null;
    // }
    this.isFoldUpCard = true;

    // console.log('Selected card: ', this.currentParagraph);
    console.log('Fold Up card: ', $event);
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
    // this.rearrangeCardToInitPosition();
    if (!this.currSelectdCard || this.currSelectdCard.selectedCardId === cardId) {
      this.rearrangeCardToInitPosition();
    } else {
      this.rearrangeCard(this.currSelectdCard);
    }
  }

}
