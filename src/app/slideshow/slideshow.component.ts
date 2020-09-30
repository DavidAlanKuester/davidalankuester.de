import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['Küster2.jpg', 'keyboard.jpg', 'bücherregal.jpg'];
  headLines = [
  'Willkommen zur Seite von David Küster', 
  'Angular & JavaScript Developer', 
  'Master of Arts in Politikwissenschaften & Soziologie'
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
