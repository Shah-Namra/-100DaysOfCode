// ========== setTimeout ==========

function x() {
var i = 1;
setTimeout(function () {
console.log(i);
}, 3000);
console.log("Namaste Javascript");
}
x();
// Output:
// Namaste Javascript
// 1 ... after waiting 3 seconds

// Here js prints string immediately, waits 3s and then prints 1
// function inside setTimeout forms a closure 
// and then setTimeout takes this callback function and attachess timer of 3000ms and stores it.
//Goes to next line without waiting and prints string.
//After 3000ms runs out, JS takes function, puts it into call stack and runs it.

// Q) : Print 1 after 1 sec, 2 after 2 sec till 5 : Tricky interview question

function x() {
for (var i = 1; i <= 5; i++) {
setTimeout(function () {
console.log(i);
}, i * 1000);
}
console.log("Namaste Javascript");
}
x();
// Output:
// Namaste Javascript
// 6
// 6
// 6
// 6
// 6

// Reason: Closures
// setTimeout remembers the refrence to i not the value of i 
// all 5 copy of function is pointing to same refrence to i 
//. JS stores these 5 functions, prints string and then comes back to the functions. 
//By then the timer has run fully. 
//And dueto looping, the i value became 6. 
//And when the callback fun runs the variable i = 6. So same 6 is printed in each log

// how to Avoid this?

//To avoid this, we can use let instead of var as let has Block scope. 
// For each iteration, the i is a new variable altogether(new copy of i). 
//Everytime setTimeout isrun, the inside function forms closure with new variable i

function x() {
for (var i = 1; i <= 5; i++) {
function close(i) {
setTimeout(function () {
console.log(i);
}, i * 1000);
// put the setT function inside new function close()
}
close(i); // everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!
}
}
x();

// How to do it only using var?
// to work this we need to give new copy of i everytime to point and form the closure with it

function x(){
    for (var i =1; i<= 5; i++){
        function close(i){
            setTimeout (function(){
                console.log(i);
            },i*1000 );
        }close(i);
    }
}
x();
// this will work because everytime we call this close function with this i it creates a new copy of i for itself

