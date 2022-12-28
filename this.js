
// Question based on this keyword
// Question 1
function firstType() {
    var name = "Insider JavaScript!!";
    console.log(name);
    // console.log();
}
var name = "javaScript!!";
firstType();

// Question 2
function type2() {
    console.log(this.lastName);
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
        console.log("I like to eat " +this.food);
    }
};
var foo = obj.eat;
console.log(foo);
foo();

// Question 4
var length = 1;
function square() {
    let cb = function() {
        console.log(this.length * this.length);
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
console.log(name1);