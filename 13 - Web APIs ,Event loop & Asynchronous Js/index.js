// Event loop, Asynchronous JavaScript, 
// Call stack has no timer.

// Web APIs
// power that browser has
// Browser gives access to JS callstack to use these powers.
// setTimeOut() its not a part of Js 
// Dom APIs
// fetch()
// Local Storage
// console
// Location 

// We get all these inside call stack through global object ie. window
// use window keyword to log something inside console ... window.setTimeOut() etc
//As window is global obj, and all the above functions are present in global object, we don't explicity write window but it is implied.

console.log("Start");; // this calls the console web api (through window) which in turn actually modifies values in console.
setTimeout(function cb(){ 
    console.log ("Callback");
},5000);//this calls the setTimeout web api which gives access to timer feature. 
//It stores the callback cb() and starts timer. 
console.log(" End");// calls console api and logs in console window. After this GEC pops from call stack.

//Event Loops and Callback Queue

//cb() cannot simply directly go to callstack to be execeuted. It goes through the callback queue when timer expires. 
// Event loop keep checking the callback queue, and see if it has any element to puts it into call stack.
// It is like a gate keeper. wether it has something in callback queue if yes it pushes it in call stack

// Another example

console.log("Start");
document.getElementById("btn").addEventListener("click", function cb() { 
console.log("Callback");
});
console.log("End"); 
// first step GEC is created and pushed in Call stack 
//Eventloop has just one job to keep checking callback queue and if found something push it to call stack and delete from callback queue.

// Need of callback queue
/* Suppose user clciks button x6 times. So 6 cb() are put inside callback queue. Event loop
sees if call stack is empty/has space and whether callback queue is not empty(6 elements
here). Elements of callback queue popped off, put in callstack, executed and then popped off
from call stack.
*/

// fetch 
// fetch allows JavaScript to make HTTP requests to server
//used to retrieve and send data from and to servers using various method

console.log("Start"); 
setTimeout(function cbT() {
console.log("CB Timeout");
}, 5000);
fetch("https://api.netflix.com").then(function cbF() {
console.log("CB Netflix");
}); 
console.log("End");

// microstack queue
// Microtask Queue is exactly same as Callback Queue, but it has higher priority.
// Functions in Microtask Queue are executed earlier than Callback Queue.

//In console, first Start and End are printed in console. 
// First cbF goes in callstack and "CB Netflix" is printed. cbF popped from callstack.
// Next cbT is removed from callback Queue, put in Call Stack, "CB Timeout" is printed, and cbT removed from callstack.

//Mutation Observer : 
//Keeps on checking whether there is mutation in DOM tree or not, and if there, then it execeutes some callback function.
//Callback functions that come through promises and mutation observer go inside Microtask Queue.

// Starvation
// If the task in microtask Queue keeps creating new tasks in the queue, element in callback queue never gets chance to be run. 

/*
1. When does the event loop actually start?
 - Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. 
It's always running and doing its job. 

2.  Are only asynchronous web API callbacks are registered in the web API environment?
- YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered in the Web API environment.
It's just those async callback functions that go through all this.

3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue?
- Yes, the callback functions are stored, and a reference is scheduled in the queues. 
Moreover, in the case of event listeners(for example click handlers), the original callbacks stay in the web API environment forever, 
that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.

4. How does it matter if we delay for setTimeout would be 0ms.Then callback will move to queue without any wait? 
No, there are trust issues with setTimeout() . 
The callback function needs to wait until the Call Stack is empty. 
So the 0 ms callback might have to wait for 100ms also if the stack is busy.
*/
