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
  }

  ngOnInit() {
  }

  changeStyle($event): void {
    this.color = $event.type === 'mouseover' ? 'hover' : '';
  }

}
