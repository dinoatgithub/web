// parObj

class Person {
    pName;
    pAge;

    constructor(pName, pAge) {
        if (this.constructor == Person) {
            throw new Error("Abstract constructor Person cannot be instantiated.")
        }
        this.pName = pName;
        this.pAge = pAge;
    }

    getDetails() {
        return `Name: ${this.pName} and Age: ${this.pAge}`
    };
}


class Student extends Person {
    sRollNbr;
    sStream;

    constructor(pName, pAge, sRollNbr, sStream) {
        super(pName, pAge);
        this.sRollNbr = sRollNbr;
        this.sStream = sStream;
    }

    getDetails() {
        return `${super.getDetails()} RollNbr: ${this.sRollNbr} Stream: ${this.sStream}`;
    };
}

// var p1 = new Person("Dino", 24)
// console.log(p1);
var s1 = new Student("Dino", 24, 2424, "Web Design")
console.log(s1);
console.log(s1.getDetails());