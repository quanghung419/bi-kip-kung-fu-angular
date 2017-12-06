import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TranscriptModel} from '../transcript.model';
import {MatMenu, MatMenuTrigger, MenuPositionX} from '@angular/material';

@Component({
  selector: 'app-main-transcript',
  templateUrl: './main-transcript.component.html',
  styleUrls: ['./main-transcript.component.css']
})
export class MainTranscriptComponent implements OnInit {

  @Input() transcript: TranscriptModel;

  @Input() isEditingMode: boolean;

  constructor() {
  }

  ngOnInit() {
  }
  //
  // onBlurTextarea() {
  //   if (this.isEditingMode === null) {
  //
  //     // alert('On Blur text area');
  //     this.isEditingMode = false;
  //   }
  // }

}

