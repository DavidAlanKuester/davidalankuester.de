import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * 
   * @param subURL Link to open in a new window
   */
  open(subURL: string) {
    window.open('https://david-kuester.developerakademie.com/' + subURL);
  }

}
