import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit,
  Output, SimpleChanges
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
export class ParagraphComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnChanges {
  @Input() paragraph: ParagraphModel;
  // get onSentenceSelected(): EventEmitter<SentenceModel> {
  //   return this._onSentenceSelected;
  // }


  @Input() isMultipleParagraph: boolean;
  private currentSentence: SentenceModel;

  constructor(private paragraphService: ParagraphService, private sentenceService: SentenceService,
              private elRef: ElementRef, private cardService: CardService, private docService: DocService) {
    // this.onSentenceSelected = new EventEmitter();
    sentenceService.subject.subscribe((info: any) => {
      let isMatch = false;
      this.paragraph.lstSentences.forEach((sentence) => {
        if (this.paragraph.order === info.parOrder && sentence.order === info.order) {
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

  // private _onRightClickSentence: EventEmitter<any> = new EventEmitter();

  // @Output()
  // get onRightClickSentence(): EventEmitter<any> {
  //   return this._onRightClickSentence;
  // }

  private _onSentenceSelected: EventEmitter<SentenceModel> = new EventEmitter();

  @Output()
  get onSentenceSelected(): EventEmitter<SentenceModel> {
    return this._onSentenceSelected;
  }

  ngOnInit() {
    if (this.isMultipleParagraph) {
      console.log('ngOnInit Paragraph: ' + this.paragraph.order, this.elRef.nativeElement.offsetTop);
      this.paragraphService.pushMainPragraphElement(new MainPragraphElementModel(this.paragraph.order, this.elRef.nativeElement.offsetTop));

      // console.log('ngAfterViewInit ', this.paragraph.order);
    }
  }

  ngAfterContentInit(): void {
    // if (this.isMultipleParagraph) {
    //   // console.log('Paragraph: ' + this.paragraph.order, this.elRef.nativeElement.offsetTop);
    //   console.log('ngAfterContentInit ', this.paragraph.order);
    // }
    // this.paragraph.positionOfElement = this.elRef.nativeElement.offsetTop;
  }

  ngAfterContentChecked(): void {
    // if (this.isMultipleParagraph) {
    //   // console.log('Paragraph: ' + this.paragraph.order, this.elRef.nativeElement.offsetTop);
    //   console.log('ngAfterContentChecked ', this.paragraph.order);
    // }
  }

  ngAfterViewChecked(): void {
    // if (this.isMultipleParagraph) {
    //   // console.log('Paragraph: ' + this.paragraph.order, this.elRef.nativeElement.offsetTop);
    //   console.log('ngAfterViewChecked ', this.paragraph.order);
    // }
  }

  ngAfterViewInit(): void {
    // if (this.isMultipleParagraph) {
    //   // console.log('Paragraph: ' + this.paragraph.order, this.elRef.nativeElement.offsetTop);
    //   console.log('ngAfterViewInit ', this.paragraph.order);
    // }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (this.isMultipleParagraph) {
    //   // console.log('Paragraph: ' + this.paragraph.order, this.elRef.nativeElement.offsetTop);
    //   console.log('changes ', this.paragraph.order);
    //   for (const propName in changes) {
    //     console.log(propName);
    //     // let chng = changes[propName];
    //     // let cur  = JSON.stringify(chng.currentValue);
    //     // let prev = JSON.stringify(chng.previousValue);
    //     // this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    //   }
    // }
    // console.log('On change pragraph');
  }

  // ngAfterViewChecked(): void {
  // console.log('list sentence: ', this.paragraph.lstSentences);
  // console.log('Paragraph: ' + this.paragraph.order, this.elRef.nativeElement.offsetTop);
  // }

  clicked(sentence: SentenceModel): void {
    this.currentSentence = sentence;
    // this.onSentenceSelected.emit(sentence);
    this.sentenceService.changeSentence(this.paragraph.order, sentence.order);

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

    return sentence.value === this.currentSentence.value;
  }

  onRightClick($event) {
    if ($event.which === 3) {
      // TODO
      // this._onRightClickSentence.emit($event);
      this.docService.onRightClickSentence($event, this.isMultipleParagraph, this.paragraph.order);
    }
  }

}
