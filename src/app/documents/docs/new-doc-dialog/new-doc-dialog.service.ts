import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NewDocModalComponent} from './new-doc-dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material';

@Injectable()
export class NewDocDialogService {

  constructor(private dialog: MatDialog) {
  }

  public confirm(title: string, message: string): Observable<boolean> {

    let dialogRef: MatDialogRef<NewDocModalComponent>;

    dialogRef = this.dialog.open(NewDocModalComponent);
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }

}
