
// let number = 10;
// try {
//     //here it will gives an error lalal is not defined.
//     lalal
//     console.log("YOOO!! Execute without an error!!");
// } catch (err) {
//     console.log("Woops! error in try block vaiable is not defined");
//     console.log(err);
// }

try {
    lalala; // error, variable is not defined!
 } catch (err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // lalala is not defined
    console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    console.log(err); // ReferenceError: lalala is not defined
}

// try...catch...finally
try {
    console.log("Execute first if caught any error then go in the catch block!");
} catch (err) {
    console.log("Execute when caught an error in the try block!");
 } finally {
    console.log("Always execute!!");
 }