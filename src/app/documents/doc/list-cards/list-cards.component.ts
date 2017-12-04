import {Component, Input, OnInit} from '@angular/core';
import {TranscriptModel} from '../transcript.model';
import {CardService} from '../card/card.service';
import {ParagraphModel} from '../paragraph/paragraph.model';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {

  @Input() transcript: TranscriptModel;

  lstPhragraph: Array<ParagraphModel>;
  private currentParagraph: ParagraphModel;

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
    this.lstPhragraph = this.transcript.lstPhragraph;
    this.cardService.subject.subscribe((cardId: number) => {
      let isMatch = false;
      this.lstPhragraph.forEach((paragraph) => {
        if (paragraph.order === cardId) {
          this.currentParagraph = paragraph;
          console.log('track');
          isMatch = true;
        }
      });
      if (!isMatch) {
        this.currentParagraph = null;
      }
    });
  }

  clicked(paragraph: ParagraphModel) {
    this.cardService.changeSelectedCard(paragraph.order);
  }

  isSelectedCard(paragraph: ParagraphModel) {
    if (!paragraph || !this.currentParagraph) {
      return false;
    }
    return paragraph.order === this.currentParagraph.order;
  }
}
