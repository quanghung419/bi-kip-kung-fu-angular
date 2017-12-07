import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TranscriptModel} from '../transcript.model';
import {MatMenu, MatMenuTrigger, MenuPositionX} from '@angular/material';
import {MainTranscriptService} from './main-transcript.service';

@Component({
  selector: 'app-main-transcript',
  templateUrl: './main-transcript.component.html',
  styleUrls: ['./main-transcript.component.css']
})
export class MainTranscriptComponent implements OnInit {

  @Input() transcript: TranscriptModel;

  @Input() isEditingMode: boolean;
  // private rawContent: string;

  constructor(private mainTranscriptService: MainTranscriptService) {
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

  logContent($event) {
    // this.rawContent = $event.target.value;
    // this.rawContent = $event.target.value;
    this.mainTranscriptService.setRawContent($event.target.value);
    // console.log('Content: ', this.rawContent);
  }


}

