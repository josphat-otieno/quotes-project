import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[]=[
     new Quote("josephat otieno", "Francis gachuri", "Part of courage is simple consistency", new Date(2020, 11,31), 0, 0, new Date()),
     new Quote ("harrison juma", "Barack Obama", "A change is brought about because ordinary people do extraordinary things.", new Date(2021,4,15), 0 , 0, new Date()),
     new Quote("john doe", "Nelson Mandela", "Education is the key to success", new Date(2000,7,20), 0, 0, new Date()),
     new Quote("steven achieng", "walt disney", "The way to get started is to quit talking and begin doing", new Date(2019,4,17), 0, 0, new Date()),
     new Quote("rose", "Francis Waititu", "Mimi kitu naogopa ni Mungu na uji moto", new Date(2021,0,1), 0, 0, new Date())
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
    let quoteLength=this.quotes.length;
    quote.name=quote.name;
    quote.postDate=new Date(quote.postDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(){
  }

}
