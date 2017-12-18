import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {CARD_LANGUAGE} from '../../doc/writing-practice-dialog/writing-practice-dialog-config.model';

@Component({
  selector: 'app-new-doc-modal',
  templateUrl: './new-doc-dialog.component.html',
  styleUrls: ['./new-doc-dialog.component.css']
})
export class NewDocModalComponent implements OnInit, OnChanges {

  cardLangEnum: typeof CARD_LANGUAGE = CARD_LANGUAGE;

  public langLeft: CARD_LANGUAGE;
  public langRight: CARD_LANGUAGE;

  constructor(public dialogRef: MatDialogRef<NewDocModalComponent>, private router: Router) {
    this.langLeft = CARD_LANGUAGE.ENGLISH;
    this.langRight = CARD_LANGUAGE.VIETNAMESE;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onChangeLangLeft(language: CARD_LANGUAGE): void {
    console.log(language);
    this.langRight = this.getAlternativeLang(language);
  }

  onChangeLangRight(language: CARD_LANGUAGE): void {
    console.log(language);
    this.langLeft = this.getAlternativeLang(language);
  }

  getAlternativeLang(language: CARD_LANGUAGE) {
    if (language === CARD_LANGUAGE.ENGLISH) {
      return CARD_LANGUAGE.VIETNAMESE;
    }
    if (language === CARD_LANGUAGE.VIETNAMESE) {
      return CARD_LANGUAGE.ENGLISH;
    }
  }

  redirect(): void {
    this.dialogRef.close();
    this.router.navigate(['/docs:16']);
  }

}
