import {Component, Input, OnInit} from '@angular/core';
import {ParagraphModel} from '../paragraph/paragraph.model';

@Component({
  selector: 'app-sub-transcript',
  templateUrl: './sub-transcript.component.html',
  styleUrls: ['./sub-transcript.component.css']
})
export class SubTranscriptComponent implements OnInit {

  @Input() paragraph: ParagraphModel;

  constructor() {
  }

  ngOnInit() {
  }

}
