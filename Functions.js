// 1) Normal Function.

// Function to add two numbers.
// function defination.
// function add(par1, par2) {
//     var ans = par1 + par2;
//     // console.log(ans);
//     return (par1 + par2);
// }

// function call
// console.log(add(3, 5));

//functions are treated as first class citizens in JS.
// --> functions can be retured
// --> functions can be passed as an argument/paramenter



// 2) function expression.
// function defination.
// var sayHello = function() {
//     console.log("Hey Everyone !");
// }
// // function call.
// sayHello();

// 3) IIFE --> immediately invoked function.

// function add(a, b) {
//     return (a + b);
// }
// let ans = add(3, 2);
// console.log(ans);

// let additionIIFE = (function(a, b) {
//     return (a + b);
// })(20, 30);

// console.log(additionIIFE);

//Design calculator
// function calculator(operator, par1, par2) {
//     if(operator == "add") {
//         return function add() {
//             return (par1 + par2);
//         }
//     } else if(operator == "sub") {
//         return (par1 - par2);
//     } else if(operator == "mul") {
//         return (par1 * par2);
//     }
// }

// var retFun = calculator("add", 9, 9);
// let result = retFun();
// console.log(result);
// console.log(retFun);


// // Arrow function.
// function add(a, b) {
//     return (a+b);
// }

// var add = (a, b) => {
//     return (a + b);
// }
// console.log(add(2, 4));

// //if function having only one statement.
// var add = (a, b) => a + b;
// console.log(add(5, 6));

// var square = (num) => num * num;
// console.log(square(7));

// var sayHi = () => console.log("Hey there Everyone");
// sayHi();

var circumference = (radius) => {
    let res = 2 * Math.PI * radius;
    return res;
    // console.log(res);
}
console.log(circumference(9));



