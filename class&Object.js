// class Name {
//     constructor(fName, lName) {
//         this.firstName = fName;
//         this.lastName = lName;
//     };
// };

// This is the way to write a class and its constructor in short way.
function Name(fName, lName){
    console.log(this);
    this.firstName = fName;
    this.lastName = lName;
    console.log(this);
};

// way to create a object in JavaScript.
let object = new Name("Virat", "Kohli");
console.log(object);

