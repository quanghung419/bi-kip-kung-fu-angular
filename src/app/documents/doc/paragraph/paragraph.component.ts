import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit,
  Output, SimpleChanges
} from '@angular/core';
import {ParagraphModel} from './paragraph.model';
import {SentenceModel} from '../sentence/sentence.model';
import {SentenceService} from '../sentence/sentence.service';
import {ParagraphService} from "./paragraph.service";
import {MainPragraphElementModel} from "./main-pragraph-element.model";

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnChanges {


  // get onSentenceSelected(): EventEmitter<SentenceModel> {
  //   return this._onSentenceSelected;
  // }

  @Input() paragraph: ParagraphModel;
  // @Output() private _onSentenceSelected: EventEmitter<SentenceModel>;
  @Input() isMultipleParagraph: boolean;

  private currentSentence: SentenceModel;

  constructor(private paragraphService: ParagraphService, private sentenceService: SentenceService, private elRef: ElementRef) {
    // this._onSentenceSelected = new EventEmitter();
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

  ngOnInit() {
    if (this.isMultipleParagraph) {
      console.log('ngOnInit Paragraph: ' + this.paragraph.order, this.elRef.nativeElement.offsetTop);
      this.paragraphService.pushMainPragraphElement(new MainPragraphElementModel(this.paragraph.order, this.elRef.nativeElement.offsetTop));

      // console.log('ngAfterViewInit ', this.paragraph.order);
    }
  }

  ngAfterContentInit(): void {
    if (this.isMultipleParagraph) {
      // console.log('Paragraph: ' + this.paragraph.order, this.elRef.nativeElement.offsetTop);
      console.log('ngAfterContentInit ', this.paragraph.order);
    }
    // this.paragraph.positionOfElement = this.elRef.nativeElement.offsetTop;
  }

  ngAfterContentChecked(): void {
    if (this.isMultipleParagraph) {
      // console.log('Paragraph: ' + this.paragraph.order, this.elRef.nativeElement.offsetTop);
      console.log('ngAfterContentChecked ', this.paragraph.order);
    }
  }

  ngAfterViewChecked(): void {
    if (this.isMultipleParagraph) {
      // console.log('Paragraph: ' + this.paragraph.order, this.elRef.nativeElement.offsetTop);
      console.log('ngAfterViewChecked ', this.paragraph.order);
    }
  }

  ngAfterViewInit(): void {
    if (this.isMultipleParagraph) {
      // console.log('Paragraph: ' + this.paragraph.order, this.elRef.nativeElement.offsetTop);
      console.log('ngAfterViewInit ', this.paragraph.order);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isMultipleParagraph) {
      // console.log('Paragraph: ' + this.paragraph.order, this.elRef.nativeElement.offsetTop);
      console.log('changes ', this.paragraph.order);
      for (const propName in changes) {
        console.log(propName);
        // let chng = changes[propName];
        // let cur  = JSON.stringify(chng.currentValue);
        // let prev = JSON.stringify(chng.previousValue);
        // this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      }
    }
  }

  // ngAfterViewChecked(): void {
  // console.log('list sentence: ', this.paragraph.lstSentences);
  // console.log('Paragraph: ' + this.paragraph.order, this.elRef.nativeElement.offsetTop);
  // }

  clicked(sentence: SentenceModel): void {
    // this.currentSentence = sentence;
    // this.onSentenceSelected.emit(sentence);
    this.sentenceService.changeSentence(this.paragraph.order, sentence.order);
    // this.paragraph.order += 1;
  }

  isSelected(sentence: SentenceModel): boolean {
    if (!sentence || !this.currentSentence) {
      return false;
    }
    return sentence.value === this.currentSentence.value;
  }


}
