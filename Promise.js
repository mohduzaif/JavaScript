
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Done!"), 1000);
    setTimeout(() => reject(new Error("Whoops!!")), 1000);
});

promise.then(
    (error) => console.log(error),
    (result) => console.log(result),
);