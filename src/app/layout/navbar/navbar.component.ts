import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private name: string;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationEnd') {
        this.name = (<any>event).url.split('/').slice(-1)[0];
      }
    });
  }

  ngOnInit() {
  }

  isShowNavBar(): boolean {
    return this.name.indexOf('docs:') === -1;
  }
}
