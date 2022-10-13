
const worldCapitals = [
    {
        country : "India",
        capital : "New Delhi",
        population : "2cr"
    },
    {
        country : "America",
        capital : "Washington DC",
        population : "6cr"
    },
    {
        country : "France",
        capital : "Paris",
        population : "2cr"
    },
    {
        country : "England",
        capital : "London",
        population : "4cr"
    },
    {
        country : "Germany",
        capital : "Berlin",
        population : "2cr"
    },
];

//Q1 Print all the country Name with their capital.
// Expected Output --> India,New Delhi, ...

let getCountry = function(obj) {
    // let res = {};
    // res.country = obj.country;
    // res.capital = obj.capital;
    // return res;
    return obj.country + "-->" + obj.capital
};
let countriesWithCapital = worldCapitals.map(getCountry);
console.log(countriesWithCapital);
// for(let key in countriesWithCapital) {
//     console.log(countriesWithCapital[key].country +" --> "+ countriesWithCapital[key].capital);
// };

//Q2 Return the number of countries with a particular population.
// Expected Output --> {2cr : 3, 4cr : 1, 6cr : 1}

let getPopulation = function(accumulatorObject, currObj) {
    // let currpop = currObj.population;
    if(!accumulatorObject[currObj.population])
        accumulatorObject[currObj.population] = 0;
    accumulatorObject[currObj.population] += 1;
    return accumulatorObject;
};
let OverAllpopulation = worldCapitals.reduce(getPopulation, {});
console.log(OverAllpopulation);


//Q3 Get the country name with population less than 5cr.
// Expected Output --> [India, France, England, Germany]

// This code we are done by using reduce method.
let getCountriesLessThanFive = function(accumulator, currObj) {
    // let currpop = currObj.population;
    if(currObj.population <= "5cr")
        accumulator.push(currObj.country);
    return accumulator;
};
let countriesPopulationLessFiveCrore = worldCapitals.reduce(getCountriesLessThanFive, []);
console.log(countriesPopulationLessFiveCrore);

// {
//     country : "India",
//     capital : "New Delhi",
//     population : "2cr"
// }

// This code is done by using filter and map.
let getCountriesLessThanFive2 = function(currObj) {
    if(currObj.population <= "5cr") 
        return true;
};
let getCountiresLessThan5 = function(currObj) {
    return currObj.country;
};

// console.log(worldCapitals.filter(getCountriesLessThanFive2).map(getCountiresLessThan5));
let countriesPopulationLessFiveCrore2 = worldCapitals.filter(getCountriesLessThanFive2);
let countriesLessThan5 = countriesPopulationLessFiveCrore2.map(getCountiresLessThan5);
console.log(countriesLessThan5);

// Q4 find the frequency of array element.
let arr = [1, 4, 2, 3, 2, 4, 1, 5, 6, 1, 1];
// By Using Higher Order Function.
let getFrequency = function(accumulator, CurrNum) {
    if(!accumulator[CurrNum])
        accumulator[CurrNum] = 0;
    accumulator[CurrNum] += 1;
    return accumulator;
};
let frequency = arr.reduce(getFrequency, {});
console.log(frequency);

// using the noraml loop traversal OR we say conventional method.
let freq = {};
for(let i=0; i<arr.length; ++i) {
    if(!freq[arr[i]])
        freq[arr[i]] = 0;
    freq[arr[i]] += 1;
};
console.log(freq);