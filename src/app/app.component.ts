import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public router: Router) { }


  // showDarkMode() {
  //   return this.router.url.includes('/imprint') ||
  //     this.router.url.includes('/data-protection') ||
  //     this.router.url.includes('/cv') ||
  //     this.router.url.includes('/political-science');
  // }

  // scrollDarkMode() {
  //   return this.router.url.includes('/')
  // }

}
