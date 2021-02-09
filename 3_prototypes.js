// Constructor
function Book(title, author, year) {
    //console.log('Book Initialized...');
    this.title = title;
    this.author = author;
    this.year = year;
}

// GetSummary Prototype method
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
};

// Age of Book
Book.prototype.getAge = function() {
    const years = new Date().getFullYear - this.year;
    return `${this.title} is ${years} years old`;
};

// Revise the book year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
};
// Instatiate an Object
const book1 = new Book('Alchemist', 'Ravi', '2014');
const book2 = new Book('Carnegie', 'Ravi', '2016');

console.log(book1); //getSummary function is under the  _proto_ object now not under Book Constructor in console.log

console.log(book2);
book2.revise('2018');
console.log(book2);