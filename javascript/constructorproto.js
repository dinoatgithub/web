// Inheritance with Proto Functions - using "call" method.
// Teacher, PhysicsTeacher

function Teacher(teacherName) {
    this.teacherName = teacherName;
}

function PhysicsTeacher(mainSubject) {
    this.mainSubject = mainSubject;
}

var physicsTeacher = new PhysicsTeacher("Physics");
physicsTeacher.__proto__ = new Teacher("Mr G B Pandey");

console.log(physicsTeacher);
console.log(physicsTeacher.teacherName);