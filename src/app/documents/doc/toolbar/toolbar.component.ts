import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() isMainInEditingMode: boolean;

  constructor() {
  }

  private _onStartWritingPractice: EventEmitter<any> = new EventEmitter();

  @Output()
  get onStartWritingPractice(): EventEmitter<any> {
    return this._onStartWritingPractice;
  }

  private _onEditMainTranscript: EventEmitter<any> = new EventEmitter();

  @Output()
  get onEditMainTranscript(): EventEmitter<any> {
    return this._onEditMainTranscript;
  }

  private _onSaveMainTranscript: EventEmitter<any> = new EventEmitter();

  @Output()
  get onSaveMainTranscript(): EventEmitter<any> {
    return this._onSaveMainTranscript;
  }

  ngOnInit() {
  }

  editMainTrascript() {
    this._onEditMainTranscript.emit(null);
  }

  saveMainTrascript() {
    this._onSaveMainTranscript.emit(null);
  }

  showDialogWritingPractice() {
    const config = {
      'defaultSide': 'front',
      'effect': 'flip'
    };
    this._onStartWritingPractice.emit(config);
  }
}
