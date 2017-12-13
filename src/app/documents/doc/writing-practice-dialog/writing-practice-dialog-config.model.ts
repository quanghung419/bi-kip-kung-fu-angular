export enum CARD_SIDE {
  ENGLISH = 'EN',
  VIETNAMESE = 'VI'
}

export enum CARD_EFFECT {
  FLIP = 'FLIP',
  EXPAND = 'EXPAND'
}

export class WritingPracticeDialogConfigModel {
  constructor(public frontSide: CARD_SIDE, public cardEffect: CARD_EFFECT) {
  }
}
