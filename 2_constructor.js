// Constructor
function Book(title, author, year) {
    //console.log('Book Initialized...');
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    };
}

// Instatiate an Object
const book1 = new Book('Alchemist', 'Ravi', '2014');
const book2 = new Book('Carnegie', 'Ravi', '2016');

console.log(book2.title);
console.log(book1); //getSummary function is under the Book Constructor  in console.log