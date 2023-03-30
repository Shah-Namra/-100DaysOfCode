const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")
/*grandparent.addEventListener('click',e=>{
    console.log(e) // checkout console for more info
} )*/
// event bubbling and capturing

grandparent.addEventListener('click',e=>{
    console.log("grandparent 1") // clicking on child we will get grandparent 1
} )

parent.addEventListener('click',e=>{
    console.log("parent 1") // clicking on child we will get parent 1 grandparent 1
} )

child.addEventListener('click',e=>{
    console.log("child 1") // clicking on child we will get child 1 parent 1 grandparent 1
} )
// Bubbling
//when an event is triggered on a nested element in the DOM, and that event is then propagated up through its ancestors. 

// event bubbling
//mechanism in which an event that is triggered on a specific element can also trigger the same event on all of its parent elements in the DOM hierarchy

//Capturing
//handling events in the DOM, similar to bubbling
//capturing phase occurs first, followed by the target phase, and then the bubbling phase.
//the event starts at the topmost element in the DOM hierarchy and works its way down to the element that triggered the event. 

grandparent.addEventListener('click',e=>{
    console.log("grandparent Capture") 
},{ capture:true } )

grandparent.addEventListener('click',e=>{
    console.log("grandparent Bubble") 
} )

parent.addEventListener('click',e=>{
    console.log("parent Capture") 
},{ capture:true } )

parent.addEventListener('click',e=>{
    console.log("parent Bubble") 
} )

child.addEventListener('click',e=>{
    console.log("child Capture") 
},{ capture:true } )

child.addEventListener('click',e=>{
    console.log("child Bubble") 
} )

document.addEventListener('click',e=>{
    console.log("document Capture") 
},{ capture:true } )

document.addEventListener('click',e=>{
    console.log("document Bubble") 
} )
// now clicking on child will give 
//document Capture grandparent Capture parent Capture child Capture child Bubble parent Bubble grandparent Bubble document Bubble 

// Stop Event Propagation
// stopping the event when parent gets 
parent.addEventListener('click',
e=>{
    e.stopPropagation()
    console.log("parent Capture") 
},{ capture:true } )
// clicking on child will give
// Document capture grandparent capture parent capture

// if it was written here
child.addEventListener('click',
e=>{ 
    e.stopPropagation()
    console.log("child Bubble") 
} )
// it will give 
//document Capture grandparent Capture parent Capture child Capture child Bubble

// Run Event once only
parent.addEventListener('click',e=>{
    console.log("parent Bubble") 
},{once:true} )
// it will run once and remove itself immediately  

// removeEventlistner
//removing in 2s
setTimeout(()=> {
    parent.removeEventListener("click",()=>{
        console.log("Hi")
    })
},2000)

// event delegation
// new div dosent have event listners because it was added after the event listners were added