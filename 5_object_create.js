// Object of Protos
const bookProtos = {
getSummary: function() {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
},
getAge: function() {
    const years = new Date().getFullYear - this.year;
    return `${this.title} is ${years} years old`;
}
}

// Create Object
const book1 = Object.create(bookProtos);
book1.title = 'Alchemist';
book1.author = 'Ravi';
book1.year = '2021';

console.log(book1);

// Another way
const book2 = Object.create(bookProtos, {
    title: { value: 'Carnegie'},
    author: { value: 'Ravi'},
    year: { value: '2016'}
});
console.log(book2);
