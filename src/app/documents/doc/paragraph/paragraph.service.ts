import {Injectable} from '@angular/core';
import {MainPragraphElementModel} from './main-pragraph-element.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ParagraphService {

  private mappingMainParagraphSubject: Subject<number> = new Subject();

  constructor() {
  }

  matchingWithParagraph(paragraphIndex: number) {
    this.mappingMainParagraphSubject.next(paragraphIndex);
  }

  markMatchedParagraph(callbackFn: any) {
    this.mappingMainParagraphSubject.subscribe(callbackFn);
  }

}
