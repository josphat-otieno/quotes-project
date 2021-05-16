export class Quote {
    // name!:string
    // author!:string
    // quote!:string
    showQuote:boolean;
    constructor(public name:string, public author:string, public quote:string, public postDate:Date ){
        this.showQuote=false
    }



}
