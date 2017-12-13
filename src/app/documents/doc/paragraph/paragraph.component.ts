import {
  Component, ElementRef, EventEmitter, Input, OnInit, Output
} from '@angular/core';
import {ParagraphModel} from './paragraph.model';
import {SentenceModel} from '../sentence/sentence.model';
import {SentenceService} from '../sentence/sentence.service';
import {ParagraphService} from './paragraph.service';
import {MainPragraphElementModel} from './main-pragraph-element.model';
import {CardService} from '../card/card.service';
import {DocService} from '../doc.service';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {
  @Input() paragraph: ParagraphModel;
  @Input() isMultipleParagraph: boolean;
  @Input() isBelongToPracticalCard: boolean;

  private currentSentence: SentenceModel;

  constructor(private paragraphService: ParagraphService, private sentenceService: SentenceService,
              private elRef: ElementRef, private cardService: CardService, private docService: DocService) {
    this.matchingSentence();
  }

  private _onSentenceSelected: EventEmitter<SentenceModel> = new EventEmitter();

  @Output()
  get onSentenceSelected(): EventEmitter<SentenceModel> {
    return this._onSentenceSelected;
  }

  ngOnInit() {
    if (this.isMultipleParagraph) {
      console.log('ngOnInit Paragraph: ' + this.paragraph.order, this.elRef.nativeElement.offsetTop);
      this.paragraphService.pushMainPragraphElement(new MainPragraphElementModel(this.paragraph.order, this.elRef.nativeElement.offsetTop));
    }
  }

  clicked(sentence: SentenceModel): void {
    this.currentSentence = sentence;
    this.sentenceService.changeSentence(this.paragraph.order, sentence.order, this.isBelongToPracticalCard);

    // Expand corresponding card (matching with main paragraph)
    if (this.isMultipleParagraph) {
      this.cardService.changeSelectedCard(this.paragraph.order);
    }

  }

  isSelected(sentence: SentenceModel): boolean {
    if (!sentence || !this.currentSentence) {
      return false;
    }
    this._onSentenceSelected.emit();

    return sentence.order === this.currentSentence.order;
  }

  onRightClick($event) {
    if ($event.which === 3) {
      this.docService.onRightClickSentence($event, this.isMultipleParagraph, this.paragraph.order);
    }
  }

  private matchingSentence() {
    this.sentenceService.matchingSentence((info: any) => {
      console.log('Find Matching Sentence: ', info);
      let isMatch = false;
      this.paragraph.lstSentences.forEach((sentence) => {
        if (this.paragraph.order === info.parOrder && sentence.order === info.order
          && this.isBelongToPracticalCard === info.typeOfSentence) {
          this.currentSentence = sentence;
          isMatch = true;
        }
      });
      if (!isMatch) {
        this.currentSentence = null;
      }
    });
  }

}
