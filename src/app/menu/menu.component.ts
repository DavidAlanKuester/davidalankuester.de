import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() darkMode = true;
  //@Input() scrollMode = false;
  constructor(public router: Router) { }

  ngOnInit(): void {
    // this.scrollingChange()
  }

  showDarkMode() {
    return this.router.url.includes('/imprint') ||
      this.router.url.includes('/data-protection') ||
      this.router.url.includes('/cv') ||
      this.router.url.includes('/political-science');
  }

  // scrollingChange() {
  //   window.onscroll = function () {
  //     if (window.pageYOffset > 0) {
  //       this.scrollMode;
  //       // document.getElementById('header').classList.add('scrollingHeader');
  //       // document.getElementById('logo-white').classList.add('hide');
  //       // document.getElementById('logo-black').classList.remove('hide');
  //       // document.getElementById('header-links').classList.add('scrollingDarkLinks');


  //     } else {
  //       this.scrollMode = false;
  //       // document.getElementById('header').classList.remove('scrollingHeader')
  //       // document.getElementById('logo-white').classList.remove('hide');
  //       // document.getElementById('logo-black').classList.add('hide');
  //       // document.getElementById('header-links').classList.remove('scrollingDarkLinks');

  //     }
  //   }
  // }

}
