// primitive type string
const s1 = 'Hello';

console.log(typeof s1);

// object type string
const s2 = new String('Hello');

console.log(typeof s2);

// window object
console.log(window);
alert(123)
console.log(navigator.appVersion);


// Object Literals
const book1 = {
    title: 'Alchemist',
    author: 'Ravi',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
};

const book2 = {
    title: 'Carnegie',
    author: 'Ravi',
    year: '2016',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
};

console.log(book2.getSummary());
console.log(Object.values(book2));
console.log(Object.values(book2.year));//try this in console and see
console.log(Object.keys(book2));
