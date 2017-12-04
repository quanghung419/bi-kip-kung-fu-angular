import {
  Component, ElementRef, Input, OnChanges, SimpleChange,
  SimpleChanges
} from '@angular/core';
import {ParagraphModel} from '../paragraph/paragraph.model';
import {CardService} from './card.service';
import {CardModel} from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {

  @Input() paragraph: ParagraphModel;

  @Input() isSelectedCard: boolean;

  @Input() cardModel: CardModel;

  constructor(private elRef: ElementRef, private cardService: CardService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    const flagIsSelectedCard: SimpleChange = changes.isSelectedCard;
    if (flagIsSelectedCard.currentValue) {
      const self = this;
      setTimeout(function () {
        self.cardService.expandedSelectedCard(self.paragraph.order, self.elRef.nativeElement.children[0].clientHeight);
      }, 1);
    }
  }

}
