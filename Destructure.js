// Destructuring assignment is syntax that allows us to to unpack the array and object into a bunch of variables.
// actually we can use it for any iterable not only for array, same set, ect

// Destructuring of arrays.

let name = ["Vivek", "Thakur"];
//destructing of array is done below
// destructuring assignment
// sets firstName = arr[0]
// and lastName = arr[1]
let [firstName, lastName] = name;
// console.log(firstName, lastName);

// It looks great when combined with split or other array-returning methods
let [fName, lName] = "Vivek Thakur".split(" ");
// console.log(fName, lName);

let user = ["Josh", 25, "UK", "Bachelor"];
// if we want to ignore some items of array we need to give comas and go for the next property or index.
let [studentName, age, , Education] = user;
// console.log(studentName, age, Education);
[studentName,  age] = user; // here it will assign first two value rest are not stored anywhere.

// traversing of object using entries.
let userProfile = {
    name : "Mohd Uzaif",
    age : 23,
    College : "HNB University",
};
for(let [key, value] of Object.entries(userProfile)) {
    console.log(`${key} : ${value}`);
}

// swap of two variable.
let num1 = 2;
let num2 = 3;
// console.log(num1, num2);
[num1, num2] = [num2, num1];
// console.log(num1, num2);

// The Rest '...'
let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(name1); // Julius
// console.log(name2); // Caesar
// Further items aren't assigned anywhere 
// now rest operator comes under the picture.
let [n1, n2, ...restOperator] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(n1);
// console.log(n2);
// console.log(titles);

// default values.
let [fn, ln] = [];
// console.log(fn); // undefined
// console.log(ln); // undefined

let [n = "Guest", surname = "Anonymous"] = ["Julius"];
// console.log(n, surname);   //Jullius Anonymous.


//Destructuring of objects.
let options = {
    titles : "Menu", 
    width : 100, 
    height : 200,
};
//if we are extracting any property from the bjec just give the name of that property.
let {titles, width, height} = options;
console.log(titles, width, height);

let person = {
    hisName : "Manish",
    hisAge : 24,
    hisAddress : "Haridwar",
    hisDegree : "Bachelor"
};
// order does not matter.
let {hisName, hisDegree} = person;
console.log(hisName, hisDegree);

// { sourceProperty: targetVariable } we can change the property name at destructuring time.

var profile = {
    name : "Mohd Uzaif",
    age : 23,
    College : "JMI University", 
};
let {name : na, age : a, College : c} = profile;
console.log(na, a, c);

//we can provide a default value as well in case of object also.
let opt = {
    availableFood : "burgur"
};
let {price = 100, weight = 200, availableFood} = options;

// The rest '...' operator in Objects.
var profile = {
    goodName : "Mohd Uzaif",
    age : 23,
    College : "JMI University", 
};
let {goodName, ...restProperties} = profile;
console.log(goodName);
console.log(restProperties);

// Nested Destructuring is also done.

