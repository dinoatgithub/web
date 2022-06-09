//ARROW FUNCTONS

/*
    Alternate way to create a function in JavaScript.
    The object of this keyword in regular function might change but not in the case of arrow functions.

    Tip: 
    Use regular functions to create methods of objects
    When you want to invoke the method using setTimeOut etc. then only use Arrow functions to create method of the objects. Async functions like setTimeOut pass their own objects to this keyword of the method. Use binding in such cases.
*/

function regFun(params) {
    console.log(`Inside the regular function`);
    console.log(this);
}

let arrowFunction = (params) => {
    console.log(`Inside the arrow function`);
    console.log(this);
};

console.log(`Outside any function`);
console.log(this);
arrowFunction();
regFun();

var student = {
    studName: `Dino`,
    getStudName: function() {
        console.log(this.studName);
    },

    getStudNameArrow: () => {
        console.log(this.studName);
    },
};

// Regular Function called directly returns the name
console.log(`student.getStudName()`);
student.getStudName();

// Regular Function called indirectly via setTimeout returns undefined since setTimeout passes its own object to this keyword.
console.log(`setTimeout(student.getStudName, 5000)`);
setTimeout(student.getStudName, 5000);

// Regular Function called indirectly via setTimeout returns name since student object is bound using bind function.
console.log(`setTimeout(student.getStudName.bind(student), 5000);
`);
setTimeout(student.getStudName.bind(student), 5000);

var studentNew = {
    studName: `Dino`,
    getStudentName: function() {
        console.log(`getStudentName function ` + this.studName); // returns name

        setTimeout(function() {
            console.log(`Regular Function ` + this.studName); //returns undefined
        }, 10000);

        setTimeout(() => {
            console.log(`Arrow Function ` + this.studName); //returns name
        }, 10000);
    },
};

studentNew.getStudentName();

//see the following example of a regular function

let addedValues = function(a, b) {
    return a + b;
};

console.log(addedValues(1, 2));

//This can be shortened using arrow functions assign

let addedValuesArrow = (a, b) => a + b;
console.log(addedValuesArrow(1, 2));