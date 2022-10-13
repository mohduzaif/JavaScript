// Here We see the problem how we are lossing the 'this' of current object.
var user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
};  
setTimeout(user.sayHi, 3000); // Hello, undefined!

// // Here we fix that problem by Wrapping the sayHi function in a callback function
var user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
};
setTimeout(function() {
    user.sayHi();
}, 1000); // Hello John!

// short way to write above function.
// setTimeout(() => user.sayHi(), 2000);

// Here we see the another problem when our object point to the new Object.
var user = {
    firstName : "Uzaif",
    sayHi() {
        console.log(`Hello ${this.firstName}!!`);
    },
};
user = {
    sayHi() {
        console.log(`Wooops, You are at the wrong address!!`);
    },
};
setTimeout(() => user.sayHi(), 1000);

// Now bind() method comes under the picture
var user1 = {
    firstName : "dev!",
    sayHi(pharse) {
        console.log(`${pharse} ${this.firstName}!!`);
    },
};

var getFun = user1.sayHi.bind(user1);
// user1 = {
//     a : 10,
//     welcome() {
//         console.log(`Wooops, You are at the wrong address!!`);
//     }
// }
getFun("Hello");