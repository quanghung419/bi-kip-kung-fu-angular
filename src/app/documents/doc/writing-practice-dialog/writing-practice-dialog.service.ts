import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {WritingPracticeDialogComponent} from './writing-practice-dialog.component';
import {TranscriptModel} from "../transcript.model";

@Injectable()
export class WritingPracticeDialogService {

  constructor(private dialog: MatDialog) {
  }


  public showDialog(mainTranscript: TranscriptModel, subTranscript: TranscriptModel): Observable<boolean> {

    let dialogRef: MatDialogRef<WritingPracticeDialogComponent>;

    dialogRef = this.dialog.open(WritingPracticeDialogComponent, {
      width: '100%',
      height: '100vh',
      maxWidth: 'none',
      backdropClass: 'backdrop-writing-practice',
      hasBackdrop: true,
      panelClass: 'writing-dialog',
      data: {mainTranscript: mainTranscript, subTranscript: subTranscript}
    });
    return dialogRef.afterClosed();
  }

}
