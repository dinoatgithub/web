//DESTRUCTURING FUNCTONS

var student = {
    studFName: "Dino",
    studLName: "Mishra",
    studSection: "B",
    studAge: 22.0,
};

let logCompleteStudentObj = function(stu) {
    console.log("logCompleteStudentObj " + stu);
    console.log(stu);
    console.log("studFName " + stu.studFName);
    console.log("studLName " + stu.studLName);
};

logCompleteStudentObj(student);

let logStudentWithFuncDestruct = function({ studFName, studLName }) {
    console.log("logStudentWithFuncDestruct ");
    console.log("studFName " + studFName);
    console.log("studLName " + studLName);
};

logStudentWithFuncDestruct(student);

let logStudentWithFuncDestructNewVars = function({
    studFName: sFn,
    studLName: sLn,
}) {
    console.log("logStudentWithFuncDestructNewVars ");
    console.log("sFn " + sFn);
    console.log("sLn " + sLn);
};

logStudentWithFuncDestructNewVars(student);

let logStudentRestOperators = function({
    studFName: sFn,
    studLName: sLn,
    ...others
}) {
    console.log("logStudentRestOperators ");
    console.log("sFn " + sFn);
    console.log("sLn " + sLn);
    console.log("others " + others);
    console.log(others);
};

logStudentRestOperators(student);