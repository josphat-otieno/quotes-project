export class Quote {
    // name!:string
    // author!:string
    // quote!:string
    showQuote:boolean;
    constructor(public name:string, public author:string, public quote:string, public postDate:Date, public upvote:number, public downvote:number){
        this.showQuote=false
    }



}
