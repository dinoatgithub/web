/**
 * Prototype prop of constructor function.
 * It is different than the prototype of the object.
 * There are two types of prototype properties.
 * 1: For Objects and 2: For Functions.
 * In JavaScript, prototype properties of objects are used to store reference to the parent object to help using inheritance.
 * Prototype properties of constructor function contains props and mets.
 * It acts as a model everytime when you crete a new object based on a function. The prototype props and mets are copied into __proto__ property of the object.
 * After this there is no relationships between the constructor function and the object.
 * It copies and not inherits.
 */

//Blank object definition.
var Student = function() {};

//Adding props to "prototype" property of the constructor function
Student.prototype.maths = 70;
Student.prototype.physics = 80;
Student.prototype.chemistry = 90;

//Adding mets to "prototype" property of the constructor function
Student.prototype.getTotalMarks = function() {
    return this.maths + this.chemistry + this.physics;
};

console.log(new Student()); //logs a blank student object created.
console.log(new Student().__proto__); //logs all of the prototype props and mets of the newly created object.

var s = new Student();
console.log(s.__proto__);
console.log(s.maths);
console.log(s.chemistry);
console.log(s.physics);
console.log(s.getTotalMarks());