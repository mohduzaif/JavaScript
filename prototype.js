// prototype inheritance is way to inherit the property of another object.

let user = {
    name : "abc",
    age : 23,
};
console.log(user);
console.log(user.__proto__);
/*{
    // this is the user it contain its prototype that provide to this user to access all the properties
    //{name: 'abc', age: 23}
    // age : 23
    // name : "abc"
    // [[Prototype]] : Object
}*/

let admin = {
    dbAccess : true,
    dbPassword : "password", 
};

//admin prototype is override by the user but user take the prototype that provide it by browser.
admin.__proto__ = user;
console.log(admin);
{
    // admin prototype is override by user but now the prototype that gives all property at the two level to access them it will search first in admin then user then user's prototype.
    // {dbAccess: true, dbPassword: 'password'}
    // dbAccess : true
    // dbPassword : "password"
    // [[Prototype]] : Object
    // age : 23
    // name : "abc"
    // [[Prototype]] :Object
}
console.log(admin.__proto__.__proto__);

// Array are objects in JS.
// PROOF
let arr = [1, 2, 3];
console.log(arr);
// here we see that arr also conatain the prototype that are available for the objects.
{
// (3) [1, 2, 3]
// 0 : 1
// 1 : 2
// 2 : 3
// length : 3
// [[Prototype]] : Array(0)
}

// functions are also an object in JS.
function sayHi() {
    console.log("HEY!!!");
};
console.log(sayHi.__proto__);
// functons are also conatain the prototype that are available for the objects.
// ƒ () {
    //  [native code] 
    // }
    