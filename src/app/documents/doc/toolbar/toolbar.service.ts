import {Injectable} from '@angular/core';
import {WritingPracticeDialogConfigModel} from '../writing-practice-dialog/writing-practice-dialog-config.model';

@Injectable()
export class ToolbarService {

  public writingPracticeConfig: WritingPracticeDialogConfigModel;

  constructor() {
  }

}
