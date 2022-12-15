
let successPromise = new Promise(function(resolve, reject) {
    // the executor functon is run automatically when the instance of the promise class is created.

    //here that code is written which take sometimes like fetching a data from database.
    //afer 1 second signal that the job is finished with a success 
    setTimeout(() => resolve("Done!"), 1000);
});
let errorPromise = new Promise(function(resolve, reject) {
    // the executor functon is run automatically when the instance of the promise class is created.
    
    //here that code is written which take sometimes like fetching a data from database.

    //afer 1 second signal that the job is finished with a error. 
    // setTimeout(() =>  reject(new Error("Whoops!!")), 1000);
});
// console.log(successPromise);
// console.log(errorPromise);

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!!")), 1000);
//     setTimeout(() => resolve("Done!"), 1000);
// });

//one way to do this.
// promise.then(
//     //if promise is resolve then first function is called.
//     data => console.log(data),
//     //if error is occured then second function is called.
//     err => console.log(err),
// );

let songDeliveredPromise = new Promise(function(resolve, reject) {
    let song = {
        name : "Tum hi ho",
        Album : "Aashqui 2",
        Singer : "Arijit Singh",
        length : "300 seconds",
        lyrics : "Tum hi ho Tum hi ho Tum hi ho",
    };
    // 1 second = 1 month 
    // setTimeout(() => resolve("Song is delivered!!"), 1000);
    setTimeout(() => reject("song is not delivered due some urgent reasons!"), 1000);
});

songDeliveredPromise.then( 
    data => console.log(data),
    err => console.log(err),
);

songDeliveredPromise.then(alert(data));
songDeliveredPromise.then(alert);

// audience
songDeliveredPromise.then((data) => {
    console.log(data);
});
songDeliveredPromise.catch((err) => {
    console.log(err);
});

// this is called a promise chaining.
new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);
})
    .finally(() => alert("Promise ready"))
    .then(result => alert(result)) 
    .catch(err => alert(err)); 

