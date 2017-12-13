import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SentenceService {
  private subject: Subject<object> = new Subject();

  changeSentence(parOrder, order, typeOfSentence) {
    this.subject.next({parOrder, order, typeOfSentence});
  }

  public matchingSentence(callbackFn: any) {
    this.subject.subscribe(callbackFn);
  }
}
