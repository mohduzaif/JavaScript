
var user = {
    name : "Kaif",
    age : 16,
};

var sayHello = function() {
    console.log(`Hello ${user.name} here!!`);
};

user.sayHello = sayHello;

console.log(user);
user.sayHello();