import {Injectable} from '@angular/core';
import {MainPragraphElementModel} from './main-pragraph-element.model';

@Injectable()
export class MainParagraphElementMap {

  private mainParagraphElemMap: object;

  constructor() {
    this.mainParagraphElemMap = {};
  }

  public putElementIfNotExist(paragraphIndex: number, mainPragraphElement: MainPragraphElementModel) {
    if (!this.mainParagraphElemMap[paragraphIndex]) {
      this.mainParagraphElemMap[paragraphIndex] = mainPragraphElement;
    }
  }

  public clearAll() {
    this.mainParagraphElemMap = {};
  }

  public getElementById(paragraphIndex: number): MainPragraphElementModel {
    return this.mainParagraphElemMap[paragraphIndex];
  }

}
