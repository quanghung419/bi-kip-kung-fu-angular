import {Injectable} from '@angular/core';
import {TranscriptModel} from '../transcript.model';
import {ContentAnalysisService} from '../content-analysis.service';

@Injectable()
export class MainTranscriptService {

  private rawContent: string;

  constructor(private contentAnalysisService: ContentAnalysisService) {
  }

  setRawContent(value: any) {
    this.rawContent = value;
  }


  getTranscriptData(): TranscriptModel {
    if (!this.rawContent) {
      return;
    }

    return this.contentAnalysisService.getTranscriptData(this.rawContent);
  }


}
