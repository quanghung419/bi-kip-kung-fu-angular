export class CardModel {
  public initPosition: number;
  constructor(public order: number, public position: number) {
    this.initPosition = position;
  }
}
