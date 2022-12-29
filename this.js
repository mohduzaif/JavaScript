
// Question based on this keyword
// Question 1
function firstType() {
    var name = "Insider JavaScript!!";
    // console.log(name);
    // console.log();
}
var name = "javaScript!!";
firstType();

// Question 2
function type2() {
    // console.log(this.lastName);
};

var lastName = "Tiwari";

var obj = {
    lastName : "Singh",
    type2,
};
obj.type2();

// Question 3
var food = "Pizza";
var obj = {
    food : "Pasta",
    eat() {
        // console.log("I like to eat " +this.food);
    }
};
var foo = obj.eat;
// console.log(foo);
foo();

// Question 4
var length = 1;
function square() {
    let cb = function() {
        // console.log(this.length * this.length);
    };
    // window.setTimeout(cb, 2000);
    setTimeout(cb, 2000);
};
var obj = {
    length : 3,
    square,
};
obj.square();

function Name(fName, lName) {
    this.fName = fName;
    this.lName = lName;
};
//when we use new keyword then it will make an empty object and then add property (fName, lName)
let name1 = new Name("Mohd", "Uzaif");
// console.log(name1);  

// Another Type --> arrow function does not have their own this.
// this is the case of arrow function
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        //in arrow fn does not have its own 'this' , it points to 'this' outside itself.
        this.students.forEach((student) => console.log(this.title + ': ' + student));
    }
};
// group.showList();

// Normal fn is ued in forEach loop.
let profile = {
    country : "India",
    supporters : ["Clerk", "Starc", "Josh"],
    showList() {
        // here we make a normal function that has there own "this" so it will not have any supporter and country
        this.supporters.forEach(function(supporter) {
            // console.log(this); //this points to the window object here.
            console.log(this.supporter + " : "+ this.country);  // 3 times undefined : undefined
        });
    },
};
// profile.showList();


// ONE MORE CONCEPT.
// let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log( this.name );
}

// use the same function in two objects
// user.f = sayHi;
// {
//     name: "John",
//         f:function sayHi() {
//   alert( this.name );
// }
// };
admin.f = sayHi;
// {
//     name: "Admin",
//         f:function sayHi() {
//   alert( this.name );
// }

// these calls have different this
// "this" inside the function is the object "before the dot"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)
// admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

// ONE MORE
// let user = {
//     firstName: "Ilya",
//     sayHi() {
//         // here it will take the this reference from outside i.e. user --> this
//         let arrow = () => console.log(this.firstName);
//         arrow();
//     }
// };
// user.sayHi();

let user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = function() { 
            console.log(this);  //window object
            console.log(this.firstName) //undefined.
        };
        arrow();
    }
};
user.sayHi();   //undefined.


let firstName = "Ilya";
  function sayHi() {
      function arrow() {
          console.log(firstName)
      };
    arrow();
  }
sayHi(); // Ilya