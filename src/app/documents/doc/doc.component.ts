import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranscriptModel} from './transcript.model';
import {TranscriptService} from './transcript.service';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  // enTranscript: Promise<TranscriptModel>;
  enTranscript: TranscriptModel;
  vnTranscript: TranscriptModel;
  private docId: string;

  constructor(private route: ActivatedRoute, private transcriptService: TranscriptService) {
    route.params.subscribe(params => {
      this.docId = params['docId'];
    });
  }


  ngOnInit() {
    this.getTranscript();
    // console.log('DocId: ', this.docId);
    // console.log('En Transcript: ', this.enTranscript);
    // console.log('Vn Transcript: ', this.vnTranscript);
  }

  getTranscript(): void {
    // this.enTranscript = this.transcriptService.getEnTranscript();
    this.transcriptService.getEnTranscript().then(transcript => {
        this.enTranscript = transcript;
      }
    );
    this.transcriptService.getVnTranscript().then(transcript => {
        this.vnTranscript = transcript;
      }
    );
  }

}
