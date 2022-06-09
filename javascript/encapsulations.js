// encapsulation is a concept of hiding confidential data/functions to outside code.
// done by using closures in JavaScript

/*
Encapsulation is an important features of OOP.
JavaScript is OOP based on prototyping.
Encapsulation means we group the data / methods together.
Other languages do it using classes.
JavaScript does it using closures.
Data hiding should be done based on requirements only.
Encapsulation=Grouping and hiding.

var closureFunction = function ()
{
    var pVar = value; //not accessible outside of closureFunction
    function pFunction(){} //not accessible outside of closureFunction
    return {
        pubVar: value,
        pubFun: function () {}
    } //accessible outside of closureFunction
}
*/

var bankAccount = function() {
    var accountBalance = 1000;
    var deposit = function(depositAmount) {
        accountBalance += depositAmount;
        return `New balance post deposit: $` + accountBalance;
    };
    var withdraw = function(withdrawlAmount) {
        accountBalance -= withdrawlAmount;
        return `New balance post withdrawl: $` + accountBalance;
    };

    var getAccountBalance = function() {
        return `Account Balance: $ ${accountBalance}`;
    };
    return {
        deposit,
        withdraw,
        getAccountBalance,
    }; // same as deposit:deposit, withdraw:withdraw, is accessible outside of bankAccount function and can modify accountBalance variable which is not accessible outside of bankAccount function.
}; // This works like classes and has to be initialized as shown below before it can be used.

var firstAccount = bankAccount();
console.log(firstAccount.getAccountBalance());
console.log(firstAccount.deposit(100));
console.log(firstAccount.withdraw(10));

var openBankAccount = function(initialBalance) {
    var accountBalance = initialBalance;
    var deposit = function(depositAmount) {
        accountBalance += depositAmount;
        return `Amount deposited: $ ` + depositAmount;
    };
    var withdraw = function(withdrawlAmount) {
        accountBalance -= withdrawlAmount;
        return `Amount withdrawn: $ ` + withdrawlAmount;
    };

    var getAccountBalance = function() {
        return `Account Balance: $ ${accountBalance}`;
    };
    return {
        deposit,
        withdraw,
        getAccountBalance,
    }; // same as deposit:deposit, withdraw:withdraw, is accessible outside of bankAccount function and can modify accountBalance variable which is not accessible outside of bankAccount function.
}; // This works like classes and has to be initialized as shown below before it can be used.

var dinoAccount = openBankAccount(500000);
var nidhiAccount = openBankAccount(100000);

console.log(dinoAccount.getAccountBalance());
console.log(dinoAccount.deposit(10000));
console.log(dinoAccount.getAccountBalance());
console.log(dinoAccount.withdraw(50000));
console.log(dinoAccount.getAccountBalance());