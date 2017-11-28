import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  private docId: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.docId = params['docId'];
    });
  }

  ngOnInit() {
    console.log(this.docId);
  }

}
