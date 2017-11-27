import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewDocModalComponent} from '../new-doc-dialog/new-doc-dialog.component';
import {NewDocDialogService} from '../new-doc-dialog/new-doc-dialog.service';

@Component({
  selector: 'app-doc-thumb-new',
  templateUrl: './doc-thumb-new.component.html',
  styleUrls: ['./doc-thumb-new.component.css']
})
export class DocThumbNewComponent implements OnInit {

  // constructor(public dialog: MatDialog) {}

  public result: any;

  constructor(private dialogsService: NewDocDialogService) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    console.log('Open dialog NEW DOC');
    this.dialogsService.confirm('Confirm dialog', 'Are you sure you want to do this?')
      .subscribe(res => this.result = res);

    // const dialogRef = this.dialog.open(NewDocModalComponent);


    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

}
