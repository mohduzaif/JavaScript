
// String  JS.

// 1.String in single quotes.
var str = 'Hey there, Everyone!';
console.log(str);

// 2.String in double quotes
var str = 'Hey there, Everyone !';
console.log(str);

// 3.String in backticks
// 3.1 Variable
var name = "Uzaif";
var str = `Hey there Everyone , ${name} here !`;
console.log(str);

// 3.2 Evaluate expression
var str = `Sum is ${1+1}`;
console.log(str);


// Variables.

var a = 10;
console.log(a);
// with var variables can be redeclare.
var b = 20;
console.log(b);

// to overcome this problem we used let variable.

//In let variable ReInitilisation is allowed but redeclare is not.
let num1 = 100;
console.log(num1);
// let num1 = 200;
num1 = 200;
console.log(num1);

// var keyword is functional scoped when it will declare inside the
// function otherwise global scoped.

// let keyword is blocked scoped.
{
    // this part is known as block
}

var num = 10;
for(var i=0; i<num; i++) {
    let j = 10;
    if(i % 2 == 0) {
        let inIf = 5;
        console.log(i);
        console.log(inIf);
    }
}
console.log(i);
// console.log(inIf); // Uncaught ReferenceError: inIf is not defined


//const variable always declare and initialise at the same time.
// const VALUE;   // Missing initializer in const declaration.
// VLAUE = 20;

const MAX = 200;
console.log(MAX);

// this is also not allowed  reassigned of const variable.
// MAX = 300;  // Assignment to constant variable.
