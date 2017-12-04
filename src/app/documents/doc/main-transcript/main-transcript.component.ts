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
  private currentParagraph: ParagraphModel;

  // enTranscript: TranscriptModel;
  // vnTranscript: TranscriptModel;

  constructor() {
  }

  // constructor(private transcriptService: TranscriptService) {
  //   this.transcriptService.getEnTranscript().then(transcript => {
  //       this.enTranscript = transcript;
  //     }
  //   );
  //
  //   this.transcriptService.getVnTranscript().then(transcript => {
  //       this.vnTranscript = transcript;
  //     }
  //   );
  // }

  ngOnInit() {
    // console.log('List transcript.lstPhragraph: ', this.transcript.lstPhragraph);
  }

  // clicked(sentence: SentenceModel): void {
  //   this.currentSentence = sentence;
  //   this.onSentenceSelected.emit(sentence);
  // }

  // isSelected(sentence: SentenceModel): boolean {
  //   if (!sentence || !this.currentSentence) {
  //     return false;
  //   }
  //   return sentence.value === this.currentSentence.value;
  // }

  // sentenceWasSelected(sentence: SentenceModel): void {
  //   console.log('Sentence clicked: ', SentenceModel);
  // }


}

