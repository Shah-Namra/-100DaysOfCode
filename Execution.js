// How Javascript Works?  What is Execution Context?
//Everything in Javascript happens inside an Execution Context
// Execution Context can be assumed as a big box in which whole Javascript code executed
// 2 components 1)Memory 2)Code component 

//1. Memory component is also called variable component
// all functions and variables are stored as key value pairs

//2. Code component is also called thread of execution
// place where code is executed one line at a time

// javascript is a synchronous single-threaded language
//single threaded means one line at a time  
// synchronous means in a specific order 

var n=2;
function square(num){
    var ans = num*num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);
/*
 in 1st step Js allocates memory to all function and variables
 when it allocates memory to variables it stores a special value which is known as Undefined 
 and in case of function it stores the whole code of the function inside this memory space
 undefined is like a place holder

 2nd phase
 now codes runs one more time 
 the value of n is placed in the placeholder
 function invocation 
 now when 21st line is executed function is invocated which means a new execution context is made inside code component
 now the new peice of code is the code inside function 
 num is parameter of the function and n is argument of the function

 call stack / Program stack / Control stack / Runtime Stack / Machine Stack / Execution Context Stack  
 Global Execution Context (GEC) is formed and pushed inside a stack 
 and when a function is invoked or new execution context is created then it is pushed inside the stack 
 and returning it at the end means poping out the execution context 
 At the end when the code is completely executed the call stack is empty 
*/
// CALL STACK maintains the ORDER OF EXECUTION of execution contexts
