import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() darkMode = true;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  // showDarkMode() {
  //   return this.router.url.includes('/imprint') ||
  //     this.router.url.includes('/data-protection') ||
  //     this.router.url.includes('/cv') ||
  //     this.router.url.includes('/political-science');
  // }



}
