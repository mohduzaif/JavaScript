
function sayHiBye(firstName, lastName) {
    function getFullName() {
        return (firstName + " " + lastName);
    };
    console.log("Hello " + getFullName());
    console.log("Bye " + getFullName());
};

sayHiBye("Mohd", "Uzaif");