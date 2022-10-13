
// Study all the syntax of the of the call() method
var welcome1 = function() {
    console.log(`Welcome ${this.firstName} ${this.lastName} in our Academy`);
};

var welcome2 = function(email, number) {
    console.log(`Welcome ${this.firstName} ${this.lastName} in our Academy
your Email is ${email} and phone number is ${number}`);
};

var cricket1 = {
    firstName : "Virat",
    lastName : "Kohli",
    welcomeInside(email, number) {
        console.log(`Welcome ${this.firstName} ${this.lastName} in our Academy
your Email is ${email} and phone number is ${number}`); 
    },
};

var cricket2 = {
    firstName : "MS",
    lastName : "Dhoni",
};

//Syntax--->
// function_Name.call(pass object which we want point by 'this' keyword)
welcome1.call(cricket1);
welcome1.call(cricket2);

//Syntax--->
// function_name.call(object, and pass as many as arguments);
welcome2.call(cricket1, "virat123@gmail.com", 9870657973);
welcome2.call(cricket2, "msdhoni23@gmail.com", 8006779878);

//Syntax--->
// when the function is available inside one of the object then firstly we go to that object then put call method and then rest of the thing is same
// Borrow method from another object.
cricket1.welcomeInside.call(cricket1, "virat123@gmail.com", 9870657973);
cricket1.welcomeInside.call(cricket2, "msdhoni23@gmail.com", 8006779878);


// Study all the syntax of the of the apply() method.
// It is exactly same as that of call() method the difference is that it takes array as a parameter not an individual element.
var welcome4 = function(email, number, country) {
    console.log(`Welcome ${this.firstName} ${this.lastName} in our Academy
    your Email is ${email}, phone number is ${number} and country is ${country}`); 
};
welcome4.apply(cricket1, ["mohduzaif192@gmail.com", 9870657973, "India"]);

// bind

let welcome5 = function(email, number, country) {
    console.log(`Welcome ${this.firstName} ${this.lastName} to our
Academy, Your Email is ${email}, Mobile Number is ${number} and country is ${country}`);
};

// Here bind method return the fucntion that function we called in future when it required and it will point to the same object(here cricketer2) what we passed.
let getBindfn = welcome5.bind(cricket2, "mohduzaif192@gmail.com", 987, "India");
//we called it here and we can called it as many times.  
getBindfn();

// Polyfil of bind() method.

let car = {
    name : "Vitara Brezza",
    color : "Red",
};
let carDescription = function() {
    console.log(`I bought a ${this.color} color ${this.name} !!`);
};

Function.prototype.myBind = function(...args) {
    let obj = this;
    // let car = args;
    var carFeatures = args.slice(1);
    return function() {
        // obj.call(args);
        obj.apply(args[0], carFeatures);
    };
};

// let getBind = carDescription.bind(car);
// getBind();
let getMyBindfn = carDescription.myBind(car, "7kpal", 2022);
getMyBindfn();
