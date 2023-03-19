//FUNCTION INVOCATION

var x=1;
a();
b();

console.log(x);
function a(){
    var x=10;
    console.log(x);
}
function b(){
    var x=100;
    console.log(x);
}
// output : 10 100 1
// reason : local memory > global memory 
// so when a(); 4th line is executed function a is executed and in that function var x has a value 10 so in console 10 wil be printed 
// similarly with b(); 5th line 
// and then lastly 7th line will be executed i.e., console.log(x) in this value of x is 1 which global
// Call stack plays an imp role here

// what happensin browser?
// when th function is executed new execution context will be created and pushed in the call back
// it wil have its own memory space
// and when function is completed this execution context will be popped out

// Whenever there is a function declaration in the code, a separate local execution context gets created having its own phases and is pushed into the call stack.
// Once the function ends, the EC is removed from the call stack.
// When the program ends, even the global EC is pulled out of the call stack.