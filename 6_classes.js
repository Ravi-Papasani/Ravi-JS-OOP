class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static goodBookStore () {
        return 'Discover Books';
    }
}

// Instatiate an Object
const book1 = new Book('Alchemist', 'Ravi', '2014');
const book2 = new Book('Carnegie', 'Ravi', '2016');

console.log(book1); 
book1.revise('2021');
console.log(book1);
console.log(Book.goodBookStore());