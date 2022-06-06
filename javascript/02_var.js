// Dynamically or loosely typed. The type can be changed at the run time.
var x;
console.log(x);
x = "Dino";
console.log(x);
x = 24.4;
console.log(x);

// can assign and add value in same line with comma separation. Formatter may adjust in separate lines.
var name = "Dino",
    age = "24.2";
console.log("Name: " + name + " age: " + age);

var a = true; //boolean value
var b = 10.24; //number value
var c = function() {}; //function value
var d = {}; //object value
var e = []; //array value

console.log(a, b, c, d, e);

// can also be declared with const and let keyword
// const values cannot be changed during runtime and need to be assigned a value during the declatration.

const noOfHrsPerDay = 24;
var rentPerHour = 2;
var rentPerDay = rentPerHour * noOfHrsPerDay;
console.log(rentPerDay);

//Arithmetical operators +  -   *   /   %
// Assignment operators =   +=  -=  *=  /=  %=
//Increment or Decrement operators  ++ --
//Relational operators ==   !=  <   >   <=  >=
//Logical operators && || !
//Concatenation operators   +