export enum CARD_LANGUAGE {
  ENGLISH = 'EN',
  VIETNAMESE = 'VI'
}

export enum CARD_EFFECT {
  FLIP = 'FLIP',
  EXPAND = 'EXPAND'
}

export class WritingPracticeDialogConfigModel {
  constructor(public frontSide: CARD_LANGUAGE, public cardEffect: CARD_EFFECT) {
  }
}
