import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['Küster2.jpg', 'bücherregal.jpg', 'keyboard.jpg'];
  headLines = [
  'Willkommen zur Seite von David Küster', 
  'Master of Arts in Politikwissenschaften & Soziologie', 
  'Lerne JavaScript & Angular'
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
