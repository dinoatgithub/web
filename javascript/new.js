// Creating a constructor function with values assigned from outside using new keyword.
// step 1 and 3 as per the code in constructor.js are gone here and employee is replaced with this keyword.
var Employee = function(eName, eId, eSalary) {
    this.eName = eName; // Add properties
    this.eId = eId; // Add properties
    this.eSalary = eSalary; // Add properties
    this.getName = function() {
        return this.eName;
    };
};

// The new kw passes the reference of the new object created to this  keyword in the Employee function.
var emp = new Employee(`Ashish`, 4, 50000);
var emp2 = new Employee(`Ashish Shukla`, 5, 60000);
console.log(emp);
console.log(emp2);