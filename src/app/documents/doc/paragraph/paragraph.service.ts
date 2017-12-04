import {Injectable} from '@angular/core';
import {MainPragraphElementModel} from './main-pragraph-element.model';

@Injectable()
export class ParagraphService {

  listMainPragraphElement: MainPragraphElementModel[];

  constructor() {
    this.listMainPragraphElement = [];
  }

  public pushMainPragraphElement(mainPragraphElement: MainPragraphElementModel) {
    this.listMainPragraphElement.push(mainPragraphElement);
  }

}
