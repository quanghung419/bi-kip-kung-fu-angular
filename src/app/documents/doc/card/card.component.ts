import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ParagraphModel} from '../paragraph/paragraph.model';
import {ParagraphService} from "../paragraph/paragraph.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() paragraph: ParagraphModel;

  @Input() isSelectedCard: boolean;

  positionOfMainParagraph: number;

  constructor(private elRef: ElementRef, private paragraphService: ParagraphService) {
  }

  ngOnInit() {
    // console.log('Card onInit: ', this.paragraphService.listMainPragraphElement);
    for (const mainPraEle of this.paragraphService.listMainPragraphElement) {
      if (this.paragraph.order === mainPraEle.order) {
        this.positionOfMainParagraph = mainPraEle.offSetTop;
        console.log('Card' + this.paragraph.order + ' onInit: ', this.positionOfMainParagraph);
      }
    }
  }

  clicked() {
    console.log('card ' + this.paragraph.order, this.elRef.nativeElement.offsetTop);
  }

}
