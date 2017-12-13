import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SentenceModel} from './sentence.model';

@Component({
  selector: 'app-sen',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {

  @Input() isBelongToPracticalCard: boolean;
  @Input() sentence: SentenceModel;


  color = 'red';

  constructor() {
    // this._onRightClickSentence = new EventEmitter();
  }

  // selected = '';

  // get onRightClickSentence(): EventEmitter<SentenceModel> {
  //   return this._onRightClickSentence;
  // }

  ngOnInit() {
    // console.log('sentence: ', this.sentence);
  }

  changeStyle($event): void {
    this.color = $event.type === 'mouseover' ? 'hover' : '';
  }

  // markSelected($event): void {
  //   this.selected = 'selected';
  // }


}
