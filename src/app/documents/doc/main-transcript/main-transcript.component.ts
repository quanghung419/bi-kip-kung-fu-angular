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

  constructor(private mainTranscriptService: MainTranscriptService) {
  }

  ngOnInit() {
  }

  logContent($event) {
    this.mainTranscriptService.setRawContent($event.target.value);
  }

}

