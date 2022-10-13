
let arr = [2, 5, 7, 12];

let areaOfSquare = function(arr) {
    let area = [];

    // for(let i=0; i<arr.length; ++i) {
    //     area[i] = (arr[i] * arr[i]);
    // }

    for(let key in arr) {
        area.push(arr[key] * arr[key]);
    } 
    return area;
}
// let ans1 = areaOfSquare(arr);
// console.log(ans1);

function perimeterOfSquare(arr) {
    let perimeter = [];
    for(let i=0; i<arr.length; i++) {
        perimeter.push(4 * arr[i]);
    }
    return perimeter;
}
// let ans2 = perimeterOfSquare(arr);
// console.log(ans2);

function diagonalOfSquare(arr) {
    let diag = [];
    for(let i=0; i<arr.length; i++) {
        diag.push(Math.sqrt(2) * arr[i]);
    }  
    return diag;
}
// let ans3 = diagonalOfSquare(arr);
// console.log(ans3);


// Functional Programming.
// Better way to do the same code we write above.
let area = function(side) {
    return (side * side);
}
let perimeter = function(side) {
    return (4 * side);
}
let diagonal = function(side) {
    return (Math.sqrt(2) * side);
}

let calculate = function(arr, logic) {
    let res = [];
    for(let i=0; i<arr.length; ++i) {
        res.push(logic(arr[i]));
    }
    return res;
}

// console.log(calculate(arr, area));
// console.log(calculate(arr, perimeter));
// console.log(calculate(arr, diagonal));


// map
// syntax --> array.map(callback Function is passed).
// 1. Each element of arr is traversed , it is available in cb         function's parameter
// 2. we perform any action on that element 
// 3. On writing return statement result is pushed inside the Array.

//  resultant array = HOF (Callback funtion). 
let mapAreaOfSquare = arr.map((num) => {
    return (num * num);
});
// console.log(mapAreaOfSquare);

// arr.map((num) => {
//     console.log(num * num);
// });

var calculateArea = arr.map(area);
// console.log(calculateArea);

