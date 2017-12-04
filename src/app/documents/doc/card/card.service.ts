import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CardService {

  constructor() { }

  public subject: Subject<number> = new Subject();

  changeSelectedCard(cardId) {
    this.subject.next(cardId);
    console.log('card service');
  }

}
