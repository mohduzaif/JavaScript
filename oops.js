/*  Interview Problem.
class Person {
    constructor() {
        // invoked as soon as new keyword is used.
        this.name = "Uzzu";
    };
    printMyName() {
        console.log(this.name);
    };
};
let person = new Person();
console.log(person);
*/

// class components ko resemble karte h
// class Human {
//     constructor() {
//         this.eat = true;
//     };
//     printHabbit() {
//         console.log(this.eat);
//     };
// };
// class Person extends Human {
//     constructor() {
//         // invoked when the new keyword is used.
//         super();
//         this.name = "Smith";
//     }
//     printName() {
//         console.log(this.name);
//     };
// };
// let person = new Person();
// console.log(person);
/*
    Person {eat: true, name: 'Smith'}
    eat : true
    name : "Smith"
    [[Prototype]] : Human
    constructor :  class Person
    printName : ƒ printName()
    [[Prototype]] : Object
    constructor : class Human
    printHabbit : ƒ printHabbit()
    [[Prototype]] : Object
*/
// person.printHabbit();
// person.printName();


class Human {   
    eats = true;
    printHabbit=()=>{
        console.log(this);
        console.log(this.eats);
    };
};
class Person extends Human {

    //invoked as soon as new keyword is used
    name = "Abhi";
    printMyName=()=>{
        console.log(this);
        console.log(this.name);
    };

};   

const person = new Person();
// console.log(person);
person.printMyName();
person.printHabbit();