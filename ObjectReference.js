
// let person = {
//     name : "Mohd Uzaif",
//     age : 23,
//     phone : 9870657973,
//     isMale : true,
//     height : "178cm",
//     "school name" : "LMA"
// };

// let person2 = person;


// person2.name = "Vivek Thakur";
// console.log(person.name);
// console.log(person2.name);

// if(person == person2) 
//     console.log(`Hey we are Equal`);
// else
//     console.log(`OOP's we are not Equal`);

// let obj1 = {};
// let obj2 = {};

// obj1 == obj2 ? console.log(`Hey we are Equal`) : console.log(`OOP's we are not Equal`);

// if we want to make a clone of an object or deep copy.
// we can simply iterate over the previous object.

// let user = {
//     name : "Carry",
//     age : 25
// };

// let cloneObject = {};

// for(let key in user) {
//     cloneObject[key] = user[key];
// }
// console.log(`user and cloneObject says : `);
// user == cloneObject ? console.log(`Hey we are Equal`) : console.log(`OOP's we are not Equal`);

// another way to avoid for in loop to make a clone of an object.
// let cloneObject1 = Object.assign({}, user);

// let clone = {};
// Object.assign(clone, user, {favtFood : "Pizza"}, {favrtPlace : "GOA"});
// console.log(clone);

// nested cloning.
let user1 = {
    name : "Abhi",
    age : 24,
    size : {
        height : "178cm",
        weight : "50kg"
    }
};
console.log(user1);

let nestedClone = {};
// Object.assign(nestedClone, user1);
// user1.size.height = "150cm";
// console.log(user1);
// console.log(nestedClone);

nestedClone = structuredClone(user1);
nestedClone.name = "Uzzu";
nestedClone.size.height = "190cm";
console.log(nestedClone);
