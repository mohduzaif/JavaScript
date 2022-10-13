
// Spread Operator 
// it is used to spread the array and object property.

// Array
let nums = [1, 2, 3, 4, 5];
console.log(nums);  // [1, 2, 3, 4, 5]

let newNums = [...nums];
console.log(newNums);  // [1, 2, 3, 4, 5]

let newNums2 = [...nums, 7, 8, 9];
console.log(newNums2);  // [1, 2, 3, 4, 5, 7, 8, 9]

// Object
let user = {
    name : "Hardik",
    age : 20,
    residence : {
        village : "Malakpur",
        post : "Chilkana",
        distt : "SRE",
        state : "Uttar Pradesh",
    },
};
console.log(user);

let newUser = {...user, age : 23, hobbies : "Playing Cricket"};
console.log(newUser);
// upper console.log() done something Unexpected means print a value of state is Uttarakhand. 
newUser.residence.state = "Uttarakhand";
console.log(newUser);

// Rest Operator.
// It is used to merge all the parameters of the function into an array.

function mergeUsingRestOp(...arr) {
    console.log(arr);  // ['Uzaif', 22, 'B.Tech', 'HNBGU']
};
mergeUsingRestOp("Uzaif", 22, "B.Tech", "HNBGU");