//  ===========================Block Scope & Shadowing===========================

//Block also called compund statement   
{
} // this a perfect block
// Block also known as compound statement which is used to group JS statements together into 1 group.

//for example
{
var a = 10;
let b = 20;
const c = 30;
// Here let and const are hoisted in Block scope,
// While, var is hoisted in Global scope.
}

//CASE 2
{
    var a=10;
    let b =20;
    const c=30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}// 'b' and 'c' cannot be accessed outside the block but you can access 'a'
console.log(a); // 10
console.log(b);// Refrence error
console.log(c);// Refrence error

// ---------------------------REASON---------------------------
// 'b' and 'c' are inside block scope and intialized as undefined  as part of hoisting(in a sperate memory block called BLOCK)
// whereas 'a' is stored in Global scope

//therefore let and const are blocked scoped. they're stored in sperate memory space which is reserved for this block. 
//cant access outside the block 


// ---------------------------Shadowing---------------------------

// Case 3
var a=100;
{
var a=10;
let b =20;
const c=30;
console.log(a); // 10
}
console.log(a); // 10 , becoz block modified the value of 'a' ... and this replacement of 100 to 10 happens inside the global scope itself  
// only happens for variable

//CASE 4
let b=100;
{
var a=10;
let b =20;
const c=30;
console.log(b); // 20
}
console.log(b); // 100 , here both 'b' are in seprate spaces (one is in block(20) and another is in script(100)) similarly for const

// --------------------------- Illegal shadowing ---------------------------

let d=30;
{
    var d=20;
}// SyntaxError: 'a' has already been declared 

// but you can shadow it using let 
let g=30;
{
    let g=20;
}

// ---------------------------what if we vice versa?---------------------------
var f=30;
{
    let f=20;
} // 20

// ---------------------------Block scope follows lexical scope---------------

const x=10;
{
    const x=100;
    {
        const x=200;
        console.log(x); // 200
    }
    console.log(x); // 100
}

// --------------------------- Valid for arrow function as well?---------------------------

//All scope rules that work in function are same in arrow functions too.
//Since var is function scoped, it is not a problem with the code below.
let a = 20;
function x() {
var a = 20;
}
