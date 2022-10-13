let area = function(side) {
    return (side * side);
};

let perimeter = function(side) {
    return (4 * side);
};

let diagonal = function(side) {
    return (Math.sqrt(2) * side);
};

// Implementation of own map() function.
let arr = [2, 4, 6, 8];

// this is the in-build map function it will called by using arr name any pass the logic/variable inside it.
arr.map(area);

// this is our calculate function we write but we want it also looks like 
// in-build map function syntattically.
// calculate(arr, area);

let nArr = [2, 4, 6, 8];    // nArr->this

// To write our map like an in-build map() method.
// we need to write an function which is available for every new array we create in this file
Array.prototype.myMap = function(logic) {
    let res = [];
    for(let i=0; i<this.length; ++i) {
        res.push(logic(this[i]));
    }
    return res;
};
let ans = nArr.myMap(area);
// console.log(ans);


// Implement own myPush function.
Array.prototype.myPush = function(num) {
    let len = this.length;   // nArr is of size 4.
    this[len] = num;
    // return this;
};
nArr.myPush(45);
// console.log(nArr);

// filter
// it will return only truthy value if condition is false then it will return
// same value on which we are perform the operation.

// let filterAns = arr.filter((num) => {
//     return num > 4;
// });

let greaterThan4 = function(num) {
    if(num > 4) return num;
};
let filterAns = arr.filter(greaterThan4);
// console.log(filterAns);

// reduce() method.
let newArray = [1, 2, 9, 4, 5];
// let reduceAns = newArray.reduce((accumulator, num) => {
//     accumulator += num;
//     return accumulator;
// });
// console.log(reduceAns);

let CalculateSum = function(accumulator, currVal) { 
    accumulator += currVal;
    return accumulator;

    // return accumulator + currVal;
};
/*
// this is not working till now we are trying to elaborate more.
Array.prototype.myReduce = function(CalculateSum) {
    let ans = 0;
    for(let i=0; i<this.length; ++i) {
        ans = ans + CalculateSum(ans, this[i]);
    }
    return ans;
};
*/
// let reduceAns = newArray.myReduce(CalculateSum);
// console.log(reduceAns);


// calculate greater element from the array using reduce method.
let greaterFindArray = [10, -5, 6, 528, 56, 12, 456];
let findGreater = function(tillNowGreater, currVal) {
    // if(currVal > tillNowGreater)
    //     tillNowGreater = currVal;
    // return tillNowGreater;
    return tillNowGreater > currVal ? tillNowGreater : currVal;
};
// here you see reduce function also take one more argument that is the initial value of accumulator.
// now the currVal is start from the zeroth value of array.
let greater = greaterFindArray.reduce(findGreater, -Infinity);
console.log(greater);