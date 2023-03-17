// Hoisting 
// Process in which all the Variables, Functions and Class defination are declared BEFORE execution of the code 
// can access without any error
getname();
console.log(x);
console.log(getname);

var x =9;
function getname(){
    console.log("Namaste Js");
}
/* so the outputs would be 
 Namaste Js
 undefined
 f getname(){
    console.log("Namaste Js");
 }
*/

// var = getname() => {} ... arrow function   
// when we use getname as a arrow function it behaves as a variable at the time of execution  

// var getname = function (){} ... is another syntax to declare a function ... also behaves as a variable 

// Variables are initialised to UNDEFINED when they are declared and Function defination is stored AS IT IS.
// They are declared in Memory Allocation Phase in the Memory Component of Execution Context, so we can use them even BEFORE they are declared.
// UNDEFINED means Variable has been declared but value is not ASSIGNED but NOT DEFINED means Variables is NOT DECLARED.
// When we assign Variable to a Function defination, we CAN NOT call this Variable as Function BEFORE declaration as it will behave as Variable with UNDEFINED value.

 