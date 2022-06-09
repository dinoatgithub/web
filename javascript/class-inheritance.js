// parent class
class Teacher {
    teacherName;

    constructor(teacherName) {
        this.teacherName = teacherName;
    }
}

// child class
class HindiTeacher extends Teacher {
    mainSubject;
    constructor(mainSubject) {
        super();
        this.mainSubject = mainSubject;
    }
}

// obj of parent class
console.log(new Teacher("Mrs Matthews"));

//obj of child class
console.log(new HindiTeacher()); 