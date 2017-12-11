import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-writing-practice-dialog',
  templateUrl: './writing-practice-dialog.component.html',
  styleUrls: ['./writing-practice-dialog.component.css']
})
export class WritingPracticeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WritingPracticeDialogComponent>) {
  }

  ngOnInit() {
  }

}
