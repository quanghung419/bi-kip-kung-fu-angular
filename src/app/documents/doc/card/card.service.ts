import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CardService {

  public subject: Subject<number> = new Subject();
  public expandedSubject: Subject<object> = new Subject();
  private deleteSubject: Subject<number> = new Subject();

  private hoverCardTitleSubject: Subject<number> = new Subject();

  constructor() {
  }

  changeSelectedCard(cardId) {
    this.subject.next(cardId);
    console.log('card service');
  }

  expandedSelectedCard(selectedCardId, expandedHeight) {
    this.expandedSubject.next({selectedCardId, expandedHeight});
  }

  public deleteCard(cardId: number) {
    this.deleteSubject.next(cardId);
  }

  public onDeteleCard(callbackFn: any) {
    this.deleteSubject.subscribe(callbackFn);
  }

  hoverCardTitle(cardId: number) {
    this.hoverCardTitleSubject.next(cardId);
  }

  onHoverCardTitle(callbackFn: any) {
    this.hoverCardTitleSubject.subscribe(callbackFn);
  }
}
