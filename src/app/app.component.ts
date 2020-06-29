import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['schach.jpg', 'keyboard.jpg', 'bücherregal.jpg', 'Küster2.jpg', 'pc.jpg'];
  headLines = [
  'Bringing life to the next level', 
  'Work and life balanced', 'Master of Arts', 
  'Rising political ambitions', 
  'Work starts at home'
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {

    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }

}
