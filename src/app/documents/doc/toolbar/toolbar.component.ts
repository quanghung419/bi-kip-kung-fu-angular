import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {
  CARD_EFFECT, CARD_LANGUAGE,
  WritingPracticeDialogConfigModel
} from '../writing-practice-dialog/writing-practice-dialog-config.model';
import {ToolbarService} from "./toolbar.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() isMainInEditingMode: boolean;

  cardEffectEnum: typeof CARD_EFFECT = CARD_EFFECT;
  cardLangEnum: typeof CARD_LANGUAGE = CARD_LANGUAGE;

  constructor(public toolbarService: ToolbarService) {
    this.toolbarService.writingPracticeConfig = new WritingPracticeDialogConfigModel(CARD_LANGUAGE.ENGLISH, CARD_EFFECT.EXPAND);
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
    this._onStartWritingPractice.emit(this.toolbarService.writingPracticeConfig);
  }
}
