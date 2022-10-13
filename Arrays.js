
//declare and initialization of array.
var cars = [];
var cars = ["Honda", "Swift", "Maruti", "Fortuner", "Scorpio", 1, 2, 3, true, undefined];
console.log(cars);

//length of array.
var len = cars.length;
console.log(len);

//replace an element from the array.
cars[2] = "Kwid";

//access an element
console.log(cars[0]);
console.log(cars[5]);

//add element at any index you can get the length of array by add one
//in last index where we add an element in array.
cars[21] = "Balano";

// Methods

//pop method
cars.pop();
console.log(cars);

//push method
cars.push("noise");

//unshift method -> add the element at the starting of the array
cars.unshift("TATA");
console.log(cars);

//shift method -> remove the element from the starting of the array
cars.shift();
console.log(cars);

//at method
//It will access from last element.
console.log(cars.at(-1));


