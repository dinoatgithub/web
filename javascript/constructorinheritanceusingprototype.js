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

//Log Person.prototype
console.log(Person.prototype); //returns obj1 as {personName:...", age:..., getDetails:..."}
console.log(Object.create(Person.prototype)); //returns obj2 with its __proto__ referring to Person.prototype
console.log(Object.create(Person.prototype).__proto__); //returns __proto__ of obj2.
console.log(Teacher.prototype); // returns as obj2 as empty obj only including the added prototype property in Ln20

console.log(teacher.__proto__.__proto__); //returns obj1 as above
console.log(teacher.City);
console.log(teacher.mainSubject);
console.log(teacher.personName);