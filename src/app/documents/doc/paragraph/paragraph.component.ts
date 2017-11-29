import {AfterViewChecked, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ParagraphModel} from './paragraph.model';
import {SentenceModel} from '../sentence/sentence.model';
import {SentenceService} from '../sentence.service';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  @Input() paragraph: ParagraphModel;
  @Output() onSentenceSelected: EventEmitter<SentenceModel>;

  private currentSentence: SentenceModel;

  constructor(private sentenceService: SentenceService) {
    this.onSentenceSelected = new EventEmitter();
    sentenceService.subject.subscribe(({parOrder, order}) => {
      let isMatch = false;
      this.paragraph.lstSentences.forEach((sentence) => {
        if (this.paragraph.order === parOrder && sentence.order === order) {
          this.currentSentence = sentence;
          console.log('track');
          isMatch = true;
        }
      });
      if (!isMatch) {
        this.currentSentence = null;
      }
    });
  }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    // console.log('list sentence: ', this.paragraph.lstSentences);
  }

  clicked(sentence: SentenceModel): void {
    // this.currentSentence = sentence;
    // this.onSentenceSelected.emit(sentence);
    this.sentenceService.changeSentence(this.paragraph.order, sentence.order);
  }

  isSelected(sentence: SentenceModel): boolean {
    if (!sentence || !this.currentSentence) {
      return false;
    }
    return sentence.value === this.currentSentence.value;
  }


}
