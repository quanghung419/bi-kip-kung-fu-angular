import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-doc-modal',
  templateUrl: './new-doc-dialog.component.html',
  styleUrls: ['./new-doc-dialog.component.css']
})
export class NewDocModalComponent implements OnInit {

  public langLeft: string;
  public langRight: string;

  constructor(public dialogRef: MatDialogRef<NewDocModalComponent>, private router: Router) {
    this.langLeft = 'English';
    this.langRight = 'Vietnamese';
  }

  ngOnInit() {
  }


  onChangeLang(param: any): void {
    console.log(param);
    const tmp = this.langLeft;
    this.langLeft = this.langRight;
    this.langRight = tmp;
    console.log(this.langLeft, this.langRight);
  }

  redirect(): void {
    this.dialogRef.close();
    this.router.navigate(['./pronunciation']);
  }

}
