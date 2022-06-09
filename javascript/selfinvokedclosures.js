var bankAccount = (function() {
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
})(); // the opening and closing brakets invoke it here itself.

console.log(bankAccount.getAccountBalance());
console.log(bankAccount.deposit(20000));
console.log(bankAccount.withdraw(5000));