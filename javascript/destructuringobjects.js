//DESTRUCTURING OBJECTS FROM

/*
===================================
var{p1:v1, p2:v2} = {p1:v1, p2:v2};
var{p1:v1, p2:v2} = objectName;
===================================
It assigns each property value into respective variable.
Order of properties doesn't matter.
If the variable name is same as property name, writing :variablename is opotional.
Default values can be specified as:
    propertyName: variableName = defaultValue
The rest operator (...) represents all remaining properties that are not assigned to any variable.
*/

var person = { fName: "John", lName: "Smith", age: 34 };

console.log(`person object`);
console.log(person);

//one way of using all these properties in other variables.
var fN = person.fName;
var lN = person.lName;
var a = person.age;
console.log(`Assigned to each variable individually`);
console.log(`fN: ${fN}, lN: ${lN}, a: ${a}`);

// using object destructuring the same can be done as follows.

var { fName: fN1, lName: lN1, age: a1 } = person;
console.log(`Assigned to each variable using obj destructuring`);
console.log(`fN1: ${fN1}, lN1: ${lN1}, a1: ${a1}`);

// using object destructuring with same variable names. Here you can add additional properties also. Each property can have a default value if not provided by the object.

var { fName, lName, age } = person;
console.log(
    `Assigned to each variable using obj destructuring with same variable names`
);
console.log(`fName: ${fName}, lName: ${lName}, age: ${age}`);

// add more properties to the object

person.city = "New Delhi";
person.country = "India";

console.log(`Updated person as`);
console.log(person);

// using default property.

var { email = "something@something.com" } = person;
console.log(`Email: ` + email);

// rest operator
var { theFirstName: fName, ...others } = person;
console.log(person);
console.log("others.lName: " + others.lName);