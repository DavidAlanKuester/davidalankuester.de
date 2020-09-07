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

  // @HostListener('document:scroll') 
  // scrollFunction() {
  //   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
  //     this.darkMode 
  //   } else {
  //     this.darkMode = false;
  //   }
  // }


  //  @HostListener('scroll')  updateScrollBehavior(event) {
  //     let header = document.getElementById('header');
  //     let links = document.getElementById('header-links');
  //     if (window.pageYOffset > 0) {
  //       header.classList.add('headerDark');
  //       links.classList.add('darkLinks');
  //     } else {
  //       header.classList.remove('headerDark');
  //       links.classList.remove('darkLinks');
  //     }
  //   }
}
