export class CardModel {

  public position: number;
  public isNewCard: boolean;

  constructor(public order: number, public initPosition: number) {
    this.position = initPosition;
  }

}
