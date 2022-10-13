// String are sequence of character.

var str = `Hello Jamian's`;
// console.log(str);
// console.log(str[6]);

// String are immutable.
str[6] = 'A';
//console.log(str);

// string methods.

// 1. length method.
console.log(str.length);

// 2.Slice method.
//starting index include and end index exclude.
var sliceStr = str.slice(6, 14);
console.log(sliceStr);
//print all character from starting to end.
console.log(str.slice(6));

// 3.substring method.
//return all the character from starting index to end-1 index.
// starting index include end index exclude.
var subStr = str.substring(0, 5);
console.log(subStr);

// 4. toLowerCase.
var lowerCase = "Hey All Beautiful's";
console.log(lowerCase.toLowerCase());

// 5.toUpperCase.
var upperCase = "Hey All Beautiful's";
console.log(upperCase.toUpperCase());

// 6.Concatination method.

var str1 = "Hey";
var str2 = "there Everyone";
console.log(str1 + " " + str2);

let concateString = str1.concat(" " + str2);
console.log(concateString);

// 7.trim method.
// remove all the starting and ending space from the string.

var str3 = "               Hello        Mota bhai             ";
console.log(str3.trim());

// 8.split method.
// Split a string into substrings using the specified separator
// and return them as an array.

// split on the basis of argument in split method.
var newString = "Hello every Jamian";
var getString = newString.split("");
console.log(getString);

var getString = newString.split(" ");
console.log(getString);

var getString = newString.split("y");
console.log(getString);

// it will give the result 1.
console.log(NaN ** 0);