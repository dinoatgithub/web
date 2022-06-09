/*
Many - changing from one to another.
Situation: Both parent and child have a method with the same name.
    In such a case when the method is called by referencing the child, the child's method will be called. Same concept will apply to parent as well. This is polymorphism.

    var objParent = {methodAbc:function(){}};
    var objChild = {methodAbc:function(){}};
    ojbChild.__proto__=objParent;
    objParent.methodAbc(); // invokes the method in Parent object.
    objChild.methodAbc(); // invokes the method in Child object.
    If the method is missing in calling object then it looks in the parent object
*/

var objParent = {
    myName: `Parent`,
    methodAbc: function() {
        console.log(`I am ${this.myName}`);
    },
    methodXyz: function() {
        console.log(`I am called in ${this.myName}`);
    },
};
var objChild = {
    myName: `Child`,
    methodAbc: function() {
        console.log(`I am ${this.myName}`);
    },
    methodXyz: function() {
        console.log(`I am called in ${this.__proto__.myName} via ${this.myName}`);
    },
};
objChild.__proto__ = objParent;
objParent.methodAbc();
objChild.methodAbc();
objParent.methodXyz();
objChild.methodXyz();