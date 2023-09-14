function book(name,writtenBy,year){
    this.name=name;
    this.author=writtenBy;
    this.year=year;
}
// prototype 1
book.prototype.getSummary=function(){
    return `${this.name} was written by ${this.author} in ${this.year}`;
}
// prototype 2
book.prototype.changeYear=function(newYear){
    this.year=newYear;
}
let book1=new book("bookOne","Ravi","2010");
let book2=new book("bookTwo","Ravi Nandan Ray","2011");
console.log(book1);
console.log(book2.getSummary());
book2.changeYear("2012");
console.log(book2.getSummary());
//console.log(navigator.appVersion);
// const book1={
//     title: "Book1",
//     writer: "Ravi",
//     year: "2010",
//     getSummary:function(){
//         return `${this.title} was written by ${this.writer} in ${this.year}.`;
//     } 
// }

// console.log(book1.getSummary());
