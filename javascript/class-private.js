class Citizen {
    #cSSN; // # means private property that cannot be accessed outside the class.
    cName;
    cAge;
    constructor(cName, cAge, cSSN) {
        this.cName = cName;
        this.cAge = cAge;
        this.#cSSN = cSSN;
    }
}