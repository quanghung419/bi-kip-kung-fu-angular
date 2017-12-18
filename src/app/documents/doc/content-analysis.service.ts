import {Injectable} from '@angular/core';
import {SentenceModel} from './sentence/sentence.model';
import {StrRangeModel} from './main-transcript/str-range.model';
import {ParagraphModel} from './paragraph/paragraph.model';
import {TranscriptModel} from './transcript.model';

@Injectable()
export class ContentAnalysisService {

  constructor() {
  }

  public getTranscriptData(rawTranscript: string): TranscriptModel {
    const standardizedData = this.standardizeData(rawTranscript);
    const transcript: TranscriptModel = new TranscriptModel();
    transcript.rawTranscript = standardizedData;
    transcript.lstPhragraph = this.splitParagraph(standardizedData);
    return transcript;
  }

  public getParagraphData(order: number, rawParagraph: string): ParagraphModel {
    const standardizedData = this.standardizeData(rawParagraph);
    const paragraphModel: ParagraphModel = new ParagraphModel();
    paragraphModel.order = order;
    paragraphModel.rawParagraph = standardizedData;
    paragraphModel.lstSentences = this.splitSentence(standardizedData);
    return paragraphModel;
  }

  private splitParagraph(rawTranscript: string): Array<ParagraphModel> {
    const lstPhragraph: Array<ParagraphModel> = [];
    const rawParagraphArr: string[] = rawTranscript.split('\n\n');
    for (let i = 0; i < rawParagraphArr.length; i++) {
      const paragraphModel: ParagraphModel = new ParagraphModel();
      paragraphModel.order = i;
      paragraphModel.rawParagraph = rawParagraphArr[i];
      paragraphModel.lstSentences = this.splitSentence(paragraphModel.rawParagraph);
      lstPhragraph.push(paragraphModel);
    }
    return lstPhragraph;
  }


  private splitSentence(rawParagraph: string): Array<SentenceModel> {
    const lstSentences: Array<SentenceModel> = [];
    console.log('---------------------------------- New Paragraph: ');
    const regex = /(".+")|(\.)|\?/g;
    // const valArray = rawParagraph.match(regex);
    let match;
    const indexes = [];

    while (match = regex.exec(rawParagraph)) {
      const range: StrRangeModel = new StrRangeModel(match.index, match.index + match[0].length);
      indexes.push(range);
    }

    const length = indexes.length;
    let baseIndex = 0;
    let latestIndex = 0;
    let rawSentence;

    let latestOrder = 0;
    for (let i = 0; i < length; i++) {
      const objRange = indexes[i];
      rawSentence = rawParagraph.substring(baseIndex, objRange.endIndex);
      console.log(rawSentence.trim());
      const sentenceModel: SentenceModel = new SentenceModel();
      sentenceModel.order = i;
      sentenceModel.value = rawSentence.trim();
      lstSentences.push(sentenceModel);
      baseIndex = objRange.endIndex;
      latestIndex = objRange.endIndex;
      latestOrder = i + 1;
    }

    const totalChar = rawParagraph.length;

    if (totalChar > latestIndex) {
      rawSentence = rawParagraph.substring(latestIndex, rawParagraph.length);
      const sentenceModel: SentenceModel = new SentenceModel();
      sentenceModel.order = latestOrder;
      sentenceModel.value = rawSentence.trim();
      lstSentences.push(sentenceModel);
      console.log(sentenceModel.value);
    }

    return lstSentences;
  }

  private standardizeData(data: string) {
    let standardizeData = data.trim();
    standardizeData = standardizeData.replace(/[\n\r]+/g, '\n\n');
    standardizeData = standardizeData.replace(/ +/g, ' ');
    return standardizeData;
  }

}
