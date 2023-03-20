//SCOOP CHAIN< SCOOP AND LEXICAL ENV

//Scope in Javascript is directly related to Lexical Environment.
function a() {
    console.log(b);// 10
    // Instead of printing undefined it prints 10, So somehow this a function could
    //access the variable b outside the function scope.
}
var b =10;
a();

// scope means where i can specific var or function in code
// what is the scope of var b? and is var b inside the scope?

//Lexical enviornment
//When ever execution context is created lexical env s created 
// lexical env = loacl memory + lexical memory of parent 
// lexical means hirerachy  
function a() {
    var b = 10;
    c();
    function c() {
    console.log(b); // 10
    }
}
a();
console.log(b); // Error, Not Defined
//so here c function is lexicaly sitting inside a function
// A function can access a global variable, but the global execution context can't access any local variable.

//call_stack = [GEC, a(), c()]
//Now lets also assign the memory sections of each execution context in call_stack.
//c() = [[lexical environment pointer pointing to a()]]
//a() = [b:10, c:{}, [lexical environment pointer pointing to GEC]]
//GEC = [a:{},[lexical_environment pointer pointing to null]]

function a() {
    function c() {
    // logic here
}
    c(); // c is lexically inside a
} // a is lexically inside global execution

// whole chain of lexical env is called scope chain. 
// it defines wether the var or a function is present inside the scope or not 

//TLDR; An inner function can access variables which are in outer functions even if inner
//function is nested deep. In any other case, a function can't access variables not in its scope.
