import {Component, Input, OnInit} from '@angular/core';
import {TranscriptModel} from '../transcript.model';
import {SentenceModel} from "../sentence/sentence.model";
import {ParagraphModel} from "../paragraph/paragraph.model";
// import {TranscriptModel} from '../transcript.model';
// import {TranscriptService} from '../transcript.service';

@Component({
  selector: 'app-main-transcript',
  templateUrl: './main-transcript.component.html',
  styleUrls: ['./main-transcript.component.css']
})
export class MainTranscriptComponent implements OnInit {

  @Input() transcript: TranscriptModel;

  constructor() {
  }

  ngOnInit() {
  }

}

