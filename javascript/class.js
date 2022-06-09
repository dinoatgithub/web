// Class is a model of objects. Objects can be created based on the class.

class car {
    regNo;
    carModel;
    carYear;

    calculateEmi(carPrice, noOfMonths, rateofInterest) {}
}

class Employee {
    empId;
    empName;
    salary;

    getEmployeeName() {
        return this.empName;
    }

    hikeSalary(amount) {
        return (this.salary = this.salary + amount);
    }
}

var empDino = new Employee();
var empNidhi = new Employee();
console.log(empDino);
empDino.empId = 1;
empNidhi.empId = 2;
empDino.empName = "Dino Mishra";
empNidhi.empName = "Nidhi Mishra";
empDino.salary = 100000;
empNidhi.salary = 100100;
console.log(empDino);
console.log(empNidhi);
console.log(empDino.getEmployeeName());
empDino.hikeSalary(30000);
console.log(empDino.salary);