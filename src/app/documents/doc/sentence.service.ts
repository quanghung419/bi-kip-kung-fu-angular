import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SentenceService {
  public subject: Subject<object> = new Subject();

  changeSentence(parOrder, order) {
    this.subject.next({parOrder, order});
    console.log('service');
  }
}
