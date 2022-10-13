
let user = {
    name : "kaif",
};
console.log(user["name"]);

// from now object {name : "kaif"} is ready for garbage collector.
user.name = null;
console.log(user);