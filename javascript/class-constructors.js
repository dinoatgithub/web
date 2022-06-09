class PersonNoConstructor {
    personName;
}

console.log(new PersonNoConstructor());
console.log(new PersonNoConstructor());

class PersonNoConstructorDefault {
    personName = "No Name";
}

console.log(new PersonNoConstructorDefault());
console.log(new PersonNoConstructorDefault());

class Person {
    personName;
    constructor(pName) {
        this.personName = pName;
    }
}

console.log(new Person("Dino"));
console.log(new Person("Nidhi"));