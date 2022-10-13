// In case of addition JS tries to convert both the operands into a string.
var ans = "5" + 1;   // string, number. + --> concatenate
console.log(ans);
var ans = 5 + "1";
console.log(ans);

// Whatever the value when we operate with undefined output is NaN.
console.log(undefined + 5);  // NaN
console.log(undefined * 5);   // NaN
console.log(undefined - 5);   // NaN
console.log(undefined / 5);   // NaN
console.log(undefined * "10");   // NaN
console.log(undefined - "hello");  // NaN
console.log(undefined / "ten");  // NaN
// Exception here it will convert undefined into a string.
console.log("hey " + undefined);  // hey undefined

//In case of multiplication , js tries to convert both the operands into Number data type
console.log(undefined * 5);   // NaN
console.log(undefined * "10");   // NaN
console.log("ten" * 3);  // NaN
console.log("10" * 3);   // 30

//null get implicitly converted to 0 -> 0
console.log(null * 10);     // 0
console.log(null * "ten");  // NaN
console.log(null * "5");    // 0*5 -->5
console.log("ten" * "3");   // NaN
console.log(true + "54");   // 54
console.log(true * "ten");  // NaN
console.log(true * "3");    // 3
console.log(false * "three"); //NaN

//In case of subtraction it tries to convert operands into numbers
var ans = 5 - "1";
console.log(ans); //4

console.log(undefined-9); //NaN
console.log(null - 9); // 0-9 -> -9
console.log(true-9); //1-9 -> -8
console.log(false - '9'); //0 - 9 -> -9

// Array element are not stored in continoues memory like (in c, cpp, java).
// So it will gives correct output when a single element is there, if more than one element is there then can not get the address of next element soit will gives NaN
console.log([1, 2, 4, 5, 6] * 2);  // NaN
console.log([4] * 2);              // 8
console.log({ a: 3 } * 2);         // NaN
