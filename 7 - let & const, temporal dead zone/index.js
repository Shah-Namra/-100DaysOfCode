// let & const , Temporal Dead Zone & Types of error

// let & const decalrations are Hoisted
// they are in temporal dead zone

//CASE 1
console.log(a);// Refrence error ... cannot access 'a' before intialization
console.log(b);//undefined
let a =10;
var b=100;


// CASE 2
let t =10;
console.log(t);
var b=100;
// var is in global space where and t is in script
// let and const are allocated memory but they are stored in different memory space then global
// cant access without putting value in it

//Temporal Dead Zone
// Time since when the let variable was hoisted until it is initialized some value

// CASE 3
console.log(x); // Refrence error: x is not defined  
// console.log(d); ... Refrence error: cant acsess 'a' before intialization
// console.log(e); ... undefined
let d =10;
var e =100;
console.log(window.d); // undefined ... can use this.d
console.log(window.e); // 100 ... can use this.e


// CASE 4
let f=10;
let f=100;
// this is a syntax error 
//SyntaxError: Identifier 'a' has already been declared
// there will be no syntax error if this is used in var

// CASE 5
let x ;
const y = 1000;
x=10; // but you cant do in this const 

// for example
let k ;
const l;
x=10;  
l=100;
console.log(l); // SyntaxError: Missing initalizer in const declaration

// const needs to intialize in the same line when you declare it

// Can we change the value of const?
let o ;
const p=1000;
o=10;  
p=100;
console.log(p); // TypeError: Assignment to constant variable


// -----------------------------------------------------------------------------------------------------
// SUMMARY
// 3 types of error 
// i. Syntax ii. Refrence iii. Type
// Types of Error: Syntax, Reference, and Type.

//Uncaught ReferenceError: x is not defined at ...
//This Error signifies that x has never been in the scope of the program. 
//This literally means that x was never defined/declared and is being tried to be accesed.

//Uncaught ReferenceError: cannot access 'a' before initialization
//This Error signifies that 'a' cannot be accessed because it is declared as 'let' and
//since it is not assigned a value, it is its Temporal Dead Zone. Thus, this error occurs.

//Uncaught SyntaxError: Identifier 'a' has already been declared
//This Error signifies that we are redeclaring a variable that is 'let' declared. No execution will take place.

//Uncaught SyntaxError: Missing initializer in const declaration
//This Error signifies that we haven't initialized or assigned value to a const declaration.

//Uncaught TypeError: Assignment to constant variable
//This Error signifies that we are reassigning to a const variable.

// ------------- DO's and DONT's -------------------
// Try using const wherever possible.
// If not, use let, Avoid var.
// const is used when values are never changed
// to avoid temporal dead zone always put declaration and intialization on the top 
