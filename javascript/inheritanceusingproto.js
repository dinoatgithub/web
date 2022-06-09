// INHERITANCE USING PROTOTYPES

/*
 Inheritance means a child object is being created based on some parent object.
 The child object has access to the properties of the parent object.
 Parent objects are a superior classification of the child objects
 __proto__ in child objects holds the reference of the parent object.
 */

console.log(`Creating Individual object person`);
var person = {
    personName: "John",
    personAge: "23",
};
console.log(`Logging person`);
console.log(person);
console.log(`Creating Individual object student`);
var student = {
    rollNo: 12,
    marks: 70,
};
console.log(`Logging student`);
console.log(student);

console.log(`Creating Individual object customer`);
var customer = {
    shippingAddress: `Bali`,
};
console.log(`Logging customer`);
console.log(customer);

console.log(`Setting parent child relationships as`);
console.log(`child.__proto__ = parent`);
student.__proto__ = person;
customer.__proto__ = person;
console.log(`Logging student object logs only students properties`);
console.log(student);
console.log("Logging student.__proto__.parent property");
console.log("student.__proto__.personName");
console.log(student.__proto__.personName);
console.log(`Loggin without proto keyword`);
console.log(`student.personName`);
console.log(student.personName);
console.log(`customer.personName`);
console.log(customer.personName);