import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-doc-modal',
  templateUrl: './new-doc-dialog.component.html',
  styleUrls: ['./new-doc-dialog.component.css']
})
export class NewDocModalComponent implements OnInit {

  public title: string;
  public message: string;

  constructor(public dialogRef: MatDialogRef<NewDocModalComponent>) {
  }

  ngOnInit() {
  }

}
