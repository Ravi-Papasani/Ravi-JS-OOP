class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
}

// Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author,year);
        this.month = month;
    }
}

// Instantiate Magazine
const mag1 = new Magazine('Forbes', 'Ravi', '2021', 'Jan');

console.log(mag1.getSummary());