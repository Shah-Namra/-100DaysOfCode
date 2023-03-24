//FIRST CLASS FUNCTIONS and Anonymous Functions

// ------------ Function Statement aka Function Declaration ------------ 
function a(){
    console.log("a called");
}

// ------------ Function Expression ------------ 
var b= function(){
    console.log("b called");
}

//Difference between function statement and function expression
// major difference is hoisting ... if we call b before intializng it will throw an error
// Why? 
//During memory creation phase a is created in memory and function assigned to a. 
// But b is created like a variable (b:undefined) and until code reaches the function() part, it is still undefined. 
// So it cannot be called.

// ------------ Anonymous Function ------------ 
function(){

}// SyntaxError : Function statements required a name
// dosent have their own identity 
// Anonymous functions are used when functions are used as values 

// ------------ Named Function Expression ------------ 
var c = function abc(){
    console.log("abc is called also c is called");
}
c(); //abc is called also c is called
abc(); //Refrence Error: function abc is not defined
// abc is not created in outer scope ... created in local scope

// ------------ Parameters and Arrguments ------------ 
// Parameters are variables defined in a function declaration or expression
function greet(name) {
    console.log(`Hello, ${name}!`);
}  
// Arguements are values that are passed to a function when it is called.
greet("John");

//Another example
var b = function (param1, param2) {
    // labels/identifiers are parameters
    console.log("b called");
};
b(arg1, arg2); // arguments - values passed inside function call

// ------------ First class function ------------ 
// We can pass function inside the function as an argument. This ability is know as First class function.

var b = function (param1) {
    console.log(param1); // prints " f() {} "
};
b(function () {});

// Other way of doing the same thing:
var b = function (param1) {
console.log(param1);
};
function xyz() {}
b(xyz); // same thing as prev code

// we can return a function from a function:
var b = function (param1) {
return function () {};
};

console.log(b()); //we log the entire fun within b.
    
//First class Functions
// Ability to be used like values is known as First class citizens
