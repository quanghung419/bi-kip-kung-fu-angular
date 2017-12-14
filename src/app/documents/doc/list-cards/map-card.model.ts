import {Injectable} from '@angular/core';
import {CardModel} from '../card/card.model';

@Injectable()
export class CardsMap {

  private cardsMap: object;

  constructor() {
    this.cardsMap = {};
  }

  public putCardIfNotExist(cardId: number, cardModel: CardModel) {
    if (!this.cardsMap[cardId]) {
      this.cardsMap[cardId] = cardModel;
    }
  }

  public removeCardByKey(cardId: number) {
    delete this.cardsMap[cardId];
  }

  public getCardById(cardId: number): CardModel {
    return this.cardsMap[cardId];
  }

  public updateCurrentHeightOfCard(cardId: number, currHeight: number): boolean {
    if (this.cardsMap[cardId]) {
      const cardModel = this.cardsMap[cardId];
      cardModel.currentHeight = currHeight;
      console.log('Update current height of card: ', cardId, currHeight);
      return true;
    }
    return false;
  }

  public hasDraftCard(): boolean {
    return false;
  }

}
