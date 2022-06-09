//FOR-IN

/*
for(var in objRef){
    objRef[var] //access value of the property of the object referenced.
}

Reads each property of the object
Loop executes once per property of the object
Should not be used for arrays
*/

var employee = {
    eName: `Dino`,
    eRole: `Sr Software Engineer`,
    eSalary: 100,
    eRsu: 110,
};

// Each property of the object employee can be accessed using the following
// Dot  notation
console.log(employee.eName);
console.log(employee.eRole);
console.log(employee.eSalary);
console.log(employee.eRsu);

//Brace notation
console.log(employee["eName"]);
console.log(employee["eRole"]);
console.log(employee["eSalary"]);
console.log(employee["eRsu"]);

//Another better way is to use for..in loop as shown below

console.log(employee);

for (let prop in employee) {
    console.log(prop, employee[prop]);

    if (prop == `eSalary` || prop == `eRsu`) {
        employee[prop] = employee[prop] + 5;
    }
}

console.log(employee);