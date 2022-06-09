/*
Constructor function initializes properties and methods into a newly created object.

Situation: You have an object employee1 with certain properties and methods. You want to create employee2 with same properties and methods as employee1. You can do this by re doing all the code for employee2. This can lead to errors and extra work. The constructor function simplifies this job for us as shown below.

*/
//Normal way
var employee1 = {
    eName: "Dino",
    eId: 1,
    eSalary: 100000,
    getName: function() {
        return this.eName;
    },
};
var employee2 = {
    eName: "Nidhi",
    eId: 2,
    eSalary: 100000,
    getName: function() {
        return this.eName;
    },
};

console.log(employee1.eName);
console.log(employee2.getName());

//With constructor function

var createEmployee = function() {
    var employee = {}; //Create object
    employee.eName = "Ravi"; // Add properties
    employee.eId = 3; // Add properties
    employee.eSalary = 500000; // Add properties
    employee.getName = function() {
        return this.eName;
    };

    return employee; //returns the newly created object
};

var emp = createEmployee();
console.log(emp.eSalary);

// Creating a constructor function with values assigned from outside.
var setEmployee = function(eName, eId, eSalary) {
    var employee = {}; //Create object
    employee.eName = eName; // Add properties
    employee.eId = eId; // Add properties
    employee.eSalary = eSalary; // Add properties
    employee.getName = function() {
        return this.eName;
    };

    return employee; //returns the newly created object
};

var emp = setEmployee(`Ashish`, 4, 50000);
var emp2 = setEmployee(`Ashish Shukla`, 5, 60000);
console.log(emp);
console.log(emp2);