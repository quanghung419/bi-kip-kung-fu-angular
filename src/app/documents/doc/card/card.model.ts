export class CardModel {

  public position: number;
  public currentHeight: number;
  public isDraftCard: boolean;

  constructor(public order: number, public initPosition: number) {
    this.position = initPosition;
  }

}
