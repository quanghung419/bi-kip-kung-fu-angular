import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {
  CARD_EFFECT, CARD_SIDE,
  WritingPracticeDialogConfigModel
} from '../writing-practice-dialog/writing-practice-dialog-config.model';
import {ToolbarService} from "./toolbar.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnChanges {
  @Input() isMainInEditingMode: boolean;
  // writingPracticeConfig: WritingPracticeDialogConfigModel;

  constructor(public toolbarService: ToolbarService) {
    this.toolbarService.writingPracticeConfig = new WritingPracticeDialogConfigModel(CARD_SIDE.ENGLISH, CARD_EFFECT.FLIP);
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

  get diagnostic() {
    return JSON.stringify(this.toolbarService.writingPracticeConfig);
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
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
    this._onStartWritingPractice.emit(this.toolbarService.writingPracticeConfig);
  }
}
