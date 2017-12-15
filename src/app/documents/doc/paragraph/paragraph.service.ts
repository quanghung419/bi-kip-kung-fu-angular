import {Injectable} from '@angular/core';
import {MainPragraphElementModel} from './main-pragraph-element.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ParagraphService {

  // listMainPragraphElement: MainPragraphElementModel[];

  // private mainPragraphElementMap: object;


  private mappingMainParagraphSubject: Subject<number> = new Subject();

  constructor() {
    // this.listMainPragraphElement = [];
  }

  matchingWithParagraph(paragraphIndex: number) {
    this.mappingMainParagraphSubject.next(paragraphIndex);
  }

  markMatchedParagraph(callbackFn: any) {
    this.mappingMainParagraphSubject.subscribe(callbackFn);
  }

  // public pushMainPragraphElement(mainPragraphElement: MainPragraphElementModel) {
  //   this.listMainPragraphElement.push(mainPragraphElement);
  // }

}
