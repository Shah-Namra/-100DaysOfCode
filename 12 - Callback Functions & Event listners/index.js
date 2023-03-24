//==============Callback functions ==============
// functions are first class citizens and the function which is passed into another function is called callback function.
function x(){

}
x(function y(){

}) // here function y is callback function
// it means its upto x when to call y

// due to callback we can do asynchronous 
setTimeout(function(){
console.log("timer")
},5000);

functionx(y){
    console.log("x");
    y();
}
x (function y(){
    console.log("y");
});
//x y ... 5sec later timer
// In the call stack, first x and y are present. After code execution, they go away and stack is empty. 
// Then after 5 seconds (from beginning) anonymous suddenly appear up in stack ie. Callback Functions setTimeout

// Blocking the main thread
// All 3 functions are executed through call stack. 
//If any operation blocks the call stack, its called blocking the main thread.

//Say if x() takes 30 sec to run, then JS has to wait for it to finish as it has only 1 call stack/1 main thread. Never block main thread

// Always use async for functions that take time eg. setTimeout

//------------ Event Listener------------
document.getElementById("ClickMe")
.addEventListener("click",function abc(){
    //when event click occurs, this callback function (xyz) is called into callstack
console.log("Button Clicked!"); 
})

//------------ Closures with Event Listners------------
// Q) how many times Button has clicked

function attachEventlistners(){
    let count = 0;
    document.getElementById("ClickMe")
.addEventListener("click",function abc(){
    console.log("Button Clicked!"); 
});
}
attachEventlistners();

//------------Garbage Collection & remove Event Listeners------------
/*Event listeners are heavy as they form closures. So even when call stack is empty,
EventListener won't free up memory allocated to count as it doesn't know when it may need
count again. So we remove event listeners when we don't need them (garbage collected)
onClick, onHover, onScroll all in a page can slow it down heavily.
*/

// ============ SUMMARY ============      
/*1. Function that is passed on as argument to another function is called callback function.
2. setTimeout helps turn JS which is sinhlethreaded and synchronous into asynchronous.
3. Event listeners can also invoke closures with scope.
4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.
5. setTimeout does not help to convert from sync to async. setTimeout itself is async operation. He used it to mock a api call.


*/
