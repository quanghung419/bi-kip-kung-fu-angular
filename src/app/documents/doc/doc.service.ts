import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DocService {

  public rightClickSentenceSubject: Subject<object> = new Subject();

  constructor() {
  }

  onRightClickSentence($event, isMainSentence, paragraphId) {
    this.rightClickSentenceSubject.next({$event, isMainSentence, paragraphId});
  }

}
