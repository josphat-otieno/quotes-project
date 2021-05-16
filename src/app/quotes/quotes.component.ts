import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[]=[
     new Quote("jose", "Francis gachuri", "part of courage is simple consistency", new Date(2020, 11,31)),
     new Quote ("otieno","Barack Obama", "hard work is the only way out", new Date(2021,4,15)),
     new Quote("otieno","Nelson Mandela", "education is the key", new Date())
  ];
  toggleQuotes(index){
    this.quotes[index].showQuote=!this.quotes[index].showQuote

  }
  deleteQuote(isRead, index){
    if(isRead){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength=this.quotes.length
    quote.name=quote.name;
    quote.postDate=new Date(quote.postDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(){
  }

}
