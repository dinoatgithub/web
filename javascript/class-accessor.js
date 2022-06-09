/**
 * class Person
 *  -personName
 *  -age
 * 
 *  -set PersonName()
 *  -get PersonName()
 * 
 *  -set Age()
 *  -get Age()
 */

class Person {
    #personName;
    #age;

    set PersonName(value) {
        if (value == null || value == undefined) {
            console.error("personName cannot be null or undefined");
            return;
        } else if (value.length > 30) {
            console.error("personName cannot be more than 30 characters");
            return;
        } else {
            this.#personName = value;
        }
    }

    set Age(value) {
        if (value > 0 && value < 110) {
            this.#age = value;
        } else { return; }

    }

    get PersonName() {
        return this.#personName;
    }

    get PersonAge() {
        return this.#age;
    }
}

var person = new Person();
person.PersonName = "Dino";
person.Age = 24;
console.log(person);
console.log(person.PersonName);
console.log(person.PersonAge);


