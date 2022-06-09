console.log(`Creating and logging a user object `);
let user = {
    userName: "",
    password: "",
    isLoggedIn: false,
    login: function() {
        if (this.userName == "admin" && this.password == "admin") {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }
    },
};

console.log(user);

console.log(`Creating and logging a manager object `);
var manager = {
    dept: "",
    dashboard: "",
    approveLeaves: function() {
        return `Leaves approved`;
    },
};
console.log(manager);

console.log(`Setting up user manager relationships`);
manager.__proto__ = user;

console.log(`Assigning values to manager object prototyped on user`);
manager.userName = "admin";
manager.password = "admin";
manager.dept = "RPA";
console.log("userName " + manager.userName);
console.log("password " + manager.password);
console.log("dept " + manager.dept);
console.log(`Letting manger log in`);
manager.login();
console.log(`isLoggedIn ` + manager.isLoggedIn);