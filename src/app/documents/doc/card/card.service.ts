import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CardService {

  private subject: Subject<number> = new Subject();
  public expandedSubject: Subject<object> = new Subject();
  private newCardSubject: Subject<number> = new Subject();

  constructor() {
  }

  public changeSelectedCard(cardId) {
    this.subject.next(cardId);
  }

  public onChangeSelectedCard(callbackFn: any) {
    this.subject.subscribe(callbackFn);
  }

  expandedSelectedCard(selectedCardId, expandedHeight) {
    this.expandedSubject.next({selectedCardId, expandedHeight});
  }

  public newCard(paragraphId: number) {
    this.newCardSubject.next(paragraphId);
  }

  public onNewCard(callbackFn: any) {
    this.newCardSubject.subscribe(callbackFn);
  }

}
