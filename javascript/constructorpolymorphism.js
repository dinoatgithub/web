// Blank object constructor function Person with blank prototype property
function Person() {}

//Adding prototype props and mets
Person.prototype.personName = "Smith";
Person.prototype.personAge = "23";
Person.prototype.getDetails = function() {
    return `Person Name: ${this.personName}, Age: ${this.personAge}`;
};

// Blank object constructor function Teacher with blank prototype property
function Teacher() {
    this.City = "Meerut";
}

// inherited from Person Object
Teacher.prototype = Object.create(Person.prototype);

//Adding more prototype props
Teacher.prototype.mainSubject = "Medical Science";

// creating instance of a new teacher
var teacher = new Teacher();
console.log(teacher.getDetails()); //accessing parent method via child(polymorphism)