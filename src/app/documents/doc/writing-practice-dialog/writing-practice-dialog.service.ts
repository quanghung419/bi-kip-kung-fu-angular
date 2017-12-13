import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {WritingPracticeDialogComponent} from './writing-practice-dialog.component';
import {TranscriptModel} from "../transcript.model";
import {WritingPracticeDialogConfigModel} from "./writing-practice-dialog-config.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class WritingPracticeDialogService {

  private practiceParagraphSubject: Subject<number> = new Subject();

  constructor(private dialog: MatDialog) {
  }

  practiceCard(cardId: number) {
    this.practiceParagraphSubject.next(cardId);
  }

  public onPracticeCard(callbackFn: any) {
    this.practiceParagraphSubject.subscribe(callbackFn);
  }

  public showDialog(mainTranscript: TranscriptModel, subTranscript: TranscriptModel,
                    initParagraphId: number, dialogConfig: WritingPracticeDialogConfigModel): Observable<boolean> {
    let dialogRef: MatDialogRef<WritingPracticeDialogComponent>;

    dialogRef = this.dialog.open(WritingPracticeDialogComponent, {
      width: '100%',
      height: '100vh',
      maxWidth: 'none',
      backdropClass: 'backdrop-writing-practice',
      hasBackdrop: true,
      panelClass: 'writing-dialog',
      data: {
        mainTranscript: mainTranscript,
        subTranscript: subTranscript,
        initParagraphId: initParagraphId,
        dialogConfig: dialogConfig
      }
    });
    return dialogRef.afterClosed();
  }

}
