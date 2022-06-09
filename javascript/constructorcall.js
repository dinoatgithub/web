// Inheritance with Constructor Functions - using "call" method.
// Teacher, PhysicsTeacher

function Teacher(teacherName) {
    this.teacherName = teacherName;
}

function PhysicsTeacher(teacherName, mainSubject) {
    Teacher.call(this, teacherName); // call parent using this
    this.mainSubject = mainSubject;
}

var PhysicsTeacher = new PhysicsTeacher("Mr Pandy", "Physics");

console.log(PhysicsTeacher);