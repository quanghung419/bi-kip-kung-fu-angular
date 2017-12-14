import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PracticalCardModel} from './practical-card.model';
import {CARD_EFFECT} from '../writing-practice-dialog/writing-practice-dialog-config.model';
import {KEY_CODE} from '../../../_shared/constants/key-code.enum';
import {TrianglifyService} from '../../../_shared/service/trianglify.service';


@Component({
  selector: 'app-practical-card',
  templateUrl: './practical-card.component.html',
  styleUrls: ['./practical-card.component.css']
})
export class PracticalCardComponent implements OnInit, OnChanges {

  @Input() sliderNum: number;
  @Input() practicalCardModel: PracticalCardModel;
  @Input() keyEventInfo: any;
  @Input() dialogConfig: any;
  @Output() onCloseCard: EventEmitter<any> = new EventEmitter();

  cardEffectEnum: typeof CARD_EFFECT = CARD_EFFECT;
  isFlipped: boolean;
  isRorateBackSide: boolean;
  isExpanded: boolean;
  trianglifyBackground: any;

  constructor(private elementRef: ElementRef, private trianglifyService: TrianglifyService) {
    this.isFlipped = false;
    this.isExpanded = false;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const changePracticalCardModel = changes['practicalCardModel'];
    if (changePracticalCardModel) {
      if (changePracticalCardModel.currentValue === null) {
        this.trianglifyBackground = this.generateTrianglifyBackground();
      }
      this.resetStatus();
    }

    const changeKeyEventInfo = changes['keyEventInfo'];
    if (changeKeyEventInfo) {
      this.onShortcutEvent();
    }

  }

  onShortcutEvent() {
    if (this.keyEventInfo && this.keyEventInfo.currNum === this.sliderNum) {
      switch (this.keyEventInfo.keyCode) {
        case KEY_CODE.SPACE:
        case KEY_CODE.ENTER:
          this.decideCardAction();
      }
    }
  }

  decideCardAction() {
    if (!this.dialogConfig) {
      this.flipCard();
      return;
    }
    if (this.dialogConfig.cardEffect === CARD_EFFECT.FLIP) {
      this.flipCard();
    } else {
      this.expandCard();
    }
  }

  resetStatus() {
    this.isExpanded = false;
    this.isFlipped = false;
    this.isRorateBackSide = false;
  }

  flipCard() {
    this.isExpanded = false;
    this.isFlipped = !this.isFlipped;
    this.isRorateBackSide = true;
  }

  expandCard() {
    this.isFlipped = false;
    this.isRorateBackSide = false;
    this.isExpanded = !this.isExpanded;
  }

  closeCard() {
    this.onCloseCard.emit();
  }

  generateTrianglifyBackground() {
    const width = this.elementRef.nativeElement.children[0].offsetWidth;
    const height = this.elementRef.nativeElement.children[0].offsetHeight;
    return this.trianglifyService.generateTrianglifyBackgroundURL(width, height);
  }

}
