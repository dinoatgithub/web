// Closure functions contain private variables and functions which are not accessible from outside the functions.
// Closure functions return objects and functions which can be accessed from outside the closure functions.

// non closure functions
var currentBalance = 10000;

let deposit = function(depositAmount) {
    currentBalance += depositAmount;
    return `New Account Balance: $ ${currentBalance}`;
};

console.log(`Original Account Balance: $ ${currentBalance}`);
console.log(deposit(6000));

// Closure functions

function closureDeposit() {
    var closureCurrentBalance = currentBalance;

    let deposit = function(depositAmount) {
        closureCurrentBalance += depositAmount;
        return `New Account Balance: $ ${closureCurrentBalance}`;
    };

    return deposit;
}

var dp = closureDeposit();
// console.log(`Original Account Balance: $ ${closureCurrentBalance}`);
console.log(dp(8000));