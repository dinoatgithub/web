/**
 * class Person
 *  -personName
 *  -age
 * 
 *  -setPersonName()
 *  -getPersonName()
 * 
 *  -setAge()
 *  -getAge()
 */

class Person {
    #personName;
    #age;

    setPersonName(value) {
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

    setAge(value) {
        if (value > 0 && value < 110) {
            this.#age = value;
        } else { return; }

    }

    getPersonName() {
        return this.#personName;
    }

    getPersonAge() {
        return this.#age;
    }
}

var person = new Person();
person.setPersonName("Dino");
person.setAge(24);
console.log(person);
console.log(person.getPersonName());
console.log(person.getPersonAge());


