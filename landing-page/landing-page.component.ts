import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  
})
export class LandingPageComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
  isLoggedIn = true;
  applyStyle = true;
  applyClass = true;
  pageTitle = 'Welcome to our Landing Page';
  imageUrl = 'path/to/image.jpg';
  buttonClicks = 0;
  incrementClicks() {
    this.buttonClicks++;
  }
  userInput = '';

}

