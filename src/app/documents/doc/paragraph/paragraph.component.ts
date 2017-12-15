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
import {CardsMap} from '../list-cards/map-card.model';
import {MainParagraphElementMap} from './main-paragraph-element-map.model';

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
  private isMatchedParagraph: boolean;
  private isShowButtonAddCard: boolean;

  constructor(private paragraphService: ParagraphService, private sentenceService: SentenceService,
              private elRef: ElementRef, private cardService: CardService, private docService: DocService,
              private cardsMap: CardsMap, private mainParagraphElementMap: MainParagraphElementMap) {
    this.matchingSentence();
    this.markMatchedParagraph();
  }

  private _onSentenceSelected: EventEmitter<SentenceModel> = new EventEmitter();

  @Output()
  get onSentenceSelected(): EventEmitter<SentenceModel> {
    return this._onSentenceSelected;
  }

  ngOnInit() {
    if (this.isMultipleParagraph) {
      console.log('ngOnInit Paragraph: ' + this.paragraph.order, this.elRef.nativeElement.offsetTop);
      const mainPragraphElementModel = new MainPragraphElementModel(this.paragraph.order, this.elRef.nativeElement.offsetTop);
      // this.paragraphService.pushMainPragraphElement(mainPragraphElementModel);
      this.mainParagraphElementMap.putElementIfNotExist(this.paragraph.order, mainPragraphElementModel);
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

  markMatchedParagraph() {
    this.paragraphService.markMatchedParagraph((paragraphIndex) => {
      if (this.paragraph.order === paragraphIndex) {
        this.isMatchedParagraph = true;
      } else {
        this.isMatchedParagraph = false;
      }
    });
  }

  showButtonAddCard($event) {
    if (this.isMultipleParagraph && !this.cardsMap.getCardById(this.paragraph.order)) {
      // console.log('Show button add card', $event, this.elRef);
      // console.log('Relative position: ', $event.offsetX / this.elRef.nativeElement.children[0].offsetWidth);
      if ($event.offsetX / this.elRef.nativeElement.children[0].offsetWidth >= 0.75) {
        this.isShowButtonAddCard = true;
      }
    }
  }

  hiddenButtonAddCard($event) {
    if (this.isMultipleParagraph) {
      // console.log('Hide button add card');
      this.isShowButtonAddCard = false;
    }
  }

  markSentence(paragraphId) {
    this.paragraphService.matchingWithParagraph(paragraphId);
  }

  addNewCard(paragraphId) {
    this.cardService.newCard(paragraphId);
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
