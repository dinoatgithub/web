//PROTOCHAIN

/*
    Every JavaScript object stores a reference to the parent object in its __proto__ property till it reaches to "built in object" type.
    The __proto__ property of built in is null.
*/

console.log(`Creating and logging temp object`);
var temp = {};
console.log(temp);
console.log(`Loggin proto of temp`);
console.log(temp.__proto__);
console.log(`Creating and logging person object`);
var person = { pName: "John", pAge: "23" };
console.log(person);
console.log(`Loggin proto of person`);
console.log(person.__proto__);
console.log(`Creating and logging student object`);
var student = { rollNo: "123", section: "Computer Science" };
console.log(`Setting student person relationships`);
student.__proto__ = person;
console.log(student, student.__proto__);
console.log(person, person.__proto__);