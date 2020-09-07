import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAtTheTop = true;


  constructor(public router: Router) {
  }


  isLandingPage(): boolean {
    return this.router.url == '/' || this.router.url == '/#life' || this.router.url == '/#square';
  }

  @HostListener('window:scroll', ['$event'])
  checkScrollPosition() {
    this.isAtTheTop = window.pageYOffset == 0; 
  }

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
