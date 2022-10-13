
// using let keyword.
function printFirst() {

    for(let i=1; i<=5; ++i) {
        setTimeout(function() {
            console.log(i);
        }, 1000 * i);
    };
};
// printFirst();  1 2 3 4 5

// using var function
function printSecond() {
    for(var i=1; i<=5; ++i) {
        setTimeout(function() {
            console.log(i);
        }, 1000*i);
    };
};
// printSecond(); 6 6 6 6 6

function VarBugRemove() {
    for(var i=1; i<=5; ++i) {
        function printOrderValue(b) {
            setTimeout(function() {
            console.log(b);
            }, 1000*b);
        };
        printOrderValue(i);
    }
}
// VarBugRemove();   // 1 2 3 4 5


