import {Component, Input, OnInit} from '@angular/core';
import {SentenceModel} from './sentence.model';

@Component({
  selector: 'g',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {


  @Input() sentence: SentenceModel;
  color = 'red';
  // selected = '';

  constructor() {
  }

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
