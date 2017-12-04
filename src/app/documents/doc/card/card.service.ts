import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CardService {

  public subject: Subject<number> = new Subject();
  public expandedSubject: Subject<object> = new Subject();

  constructor() {
  }

  changeSelectedCard(cardId) {
    this.subject.next(cardId);
    console.log('card service');
  }

  expandedSelectedCard(selectedCardId, expandedHeight) {
    this.expandedSubject.next({selectedCardId, expandedHeight});
  }
}
