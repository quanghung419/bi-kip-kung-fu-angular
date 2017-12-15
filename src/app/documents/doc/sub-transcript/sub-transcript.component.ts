import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ParagraphModel} from '../paragraph/paragraph.model';

@Component({
  selector: 'app-sub-transcript',
  templateUrl: './sub-transcript.component.html',
  styleUrls: ['./sub-transcript.component.css']
})
export class SubTranscriptComponent implements OnInit {

  @Input() paragraph: ParagraphModel;
  @Input() isEditingMode: boolean;
  @Input() isNewCard: boolean;

  constructor() {
  }

  private _onChangeContent: EventEmitter<string> = new EventEmitter();

  @Output()
  get onChangeContent(): EventEmitter<string> {
    return this._onChangeContent;
  }

  ngOnInit() {
  }

  changeContent($event) {
    this._onChangeContent.emit($event.target.value);
  }

}
