import {SentenceModel} from '../sentence/sentence.model';

export class ParagraphModel {
  order: number;
  rawParagraph: string;
  lstSentences: Array<SentenceModel>;
  isNewCard: boolean;

  constructor() {
    this.isNewCard = false;
  }

  // positionOfElement: number;

}
