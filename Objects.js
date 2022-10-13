var obj = {};
console.log(obj);

var person = {
    name : "Mohd Uzaif",
    age : 23,
    phone : 9870657973,
    isMale : true,
    height : "178cm",
    "school name" : "LMA"
};

console.log(person);

//dot notation.
// console.log(person.name);
// console.log(person.isMale);

//square bracket notation.
// console.log(person["name"]);
// console.log(person["school name"]);

var captainAmerica = {

    firstName: "Steve",
    lastName: "Rogers",
    friends: ["Bucky", "Tony Stark", "Bruce Banner"],
    age: 122,
    isAvenger: true,
    address : {
        state: "Manhattan",
        city: "New York",
        country: "USA"
    },
    sayHi: function () {
        console.log(`Hey My name is ${captainAmerica.firstName}`);
    }
};

// console.log(captainAmerica.friends);
// console.log(captainAmerica.friends[1]);
// console.log(captainAmerica["friends"][2]);
// console.log(captainAmerica["friends"][0]);

console.log(captainAmerica.sayHi);
// captainAmerica.sayHi();

//nested object accessing.
console.log(captainAmerica.address["city"]);

//looping over objects.
//for in loop

for(let key in captainAmerica) {
    console.log(key);

    // we can not access the member of object if we have a key in any 
    // variable it will give us a undefined we can only access using
    // square bracket method.

    // console.log(captainAmerica.key);
    
    console.log(captainAmerica[key]);
}

//delete a key from an object.
delete captainAmerica.age;
console.log(captainAmerica);

// adding a key in an object.
captainAmerica.height = "180cm";
console.log(captainAmerica.height);

// Another way to adding a key in an object.
captainAmerica["behaviour"] = "Good";
console.log(captainAmerica.behaviour);

