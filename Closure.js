// function outer() {
//     var a = 7;
//     function inner() {
//         console.log(a);
//     }
// };
// outer();

// in JS we can return function also.

// function outer() {
//     var a = 8;
//     // function inner() {
//     //     console.log(a);
//     // }
//     // return inner;  // function along with its lexical scope returned.
//     return function inner() {
//         console.log(a);
//     }
// };

// var returnFunction = outer();
// console.log(returnFunction); // prints the entire defination of function.
// returnFunction();

// when you try to learn how closure makes of any function then debug this code
function z() {
    let b = 10;
    function y() {
        let a = 20;
        function x() {
            console.log(a, b);
        }
        x();
    }
    y();
}
z();