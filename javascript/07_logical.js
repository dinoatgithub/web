// &&   both conditions are true, then
// ||   either is true
// !    reverses the conditions

var a = 10;
b = 100;
c = 50;

console.log(a == b && b > c);
console.log(a == b || b > c);
console.log(!(a == b));