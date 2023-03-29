// DOM 
// The Document Object Model (DOM) is a tree-like structure that represents the HTML elements on a web page.

// adding elements
const body = document.body
body.append("Hello world")
body.appendChild("Hey!!") // bothing will show and throw an error
// append child we can only append elements like divs anchor tags spans 
// while with append we can append all of those + append strings and many more
//("Hello workd", "Bye")... output Hello WorkdBye
// but with appendchild we cannot do that ... only 1 at a time

// appending elements 
const div = document.createElement('div')
div.innerText = "Hello world"
body.append(div)

const div = document.querySelector('div')
console.log(div.textContent)
console.log(div.innerText)

div.innerHTML = "<strong>Hello World</strong>"// write hello world in bold ... dont write div.textContent
// we can render html directly from js
// Not a secure way to do it 

// Or it can be also written as 
const strong = document.createElement("strong")
strong.innerText = "Hello World2"
div.append(strong)
// more secure way 
// both way u get same exact results

// Removing elements
const div = document.querySelector("div")
const spanHi = document.querySelector("#Hi")
const spanBye = document.querySelector("#Bye")

spanBye.remove() // removes id Bye
div.append(spanBye) // for adding id Bye

// adding properties, classes, data attributes, etc
// 1. How to modify actual attriubute
console.log(spanHi.getAttribute("id")) // hi in console
console.log(spanHi.getAttribute("title")) // hello in console
console.log(spanHi.id) // hi in console

// for changing id
console.log(spanHi.setAttribute("id", "abc")) // id="abd" 
spanHi.id ='abc' // id changes to abc

// for changing title
console.log(spanHi.setAttribute("title", "abc")) // id="abd"  
spanHi.title ='abc' // title changes to abc
 
// for removing attribute
spanHi.removeAttribute("title")

// getting data attribute
console.log(spanHi.dataset)
// for new name 
spanHi.dataset.newName = "Hey"

// Modifying Class
spanHi.classList.add("New-class") // class = "Hi1 Hi2 New-class"
spanHi.classList.remove("New-class") // class = "Hi1 Hi2 "
spanHi.classList.toggle("New-class") // removes if it exists or adds if it dosent   
spanHi.classList.toggle("New-class", true) // true means it automatically adds ... false automatically removes

// Modifying the style
spanHi.style.backgroundcolor = "red"
// spanHi.style.name = "change"

// Creating Dom Elements 
const newDiv = document.createElement("div");
document.body.appendChild(newDiv);

// Removing Dom Elements
const myElement = document.getElementById("myElement");
myElement.parentNode.removeChild(myElement);
