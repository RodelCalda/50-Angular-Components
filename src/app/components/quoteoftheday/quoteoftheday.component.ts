import { Component } from '@angular/core';

@Component({
  selector: 'app-quoteoftheday',
  templateUrl: './quoteoftheday.component.html',
  styleUrls: ['./quoteoftheday.component.css']
})
export class QuoteofthedayComponent {
  quotes: string[] = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
  ];
  
  randomQuote: string = '';

  generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.randomQuote = this.quotes[randomIndex];
  }

  ngOnInit() {
    this.generateRandomQuote();  // Generate a quote when the component is initialized
  }
}

