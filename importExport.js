// we have this file "person.js"
let person = {
    name : "Uzzu",
};
export default person;
export let age = 23;

//we have this file "utility.js"
export const clean = () => {};
export const dataBase = 0;

// app.js
// we can write any name other than person or not curly bracket it will import the default property.
// one script contain only one default property.
import person from "./person.js";
import {age} from "./person.js";
import {clean} from "./utility.js";
import {dataBase} from "./utility.js";


