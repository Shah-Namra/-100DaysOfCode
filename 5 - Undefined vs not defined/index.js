//undefined vs not defined

// undefined is a placeholder
// value which js allocates while creating the memory
// not equal empty
// if var is intialize but dont have any value then the output would be undefined

// not defined
// something which has not allocated the memory 

//When variable is declared but not assigned value, its current value is undefined. But when
//the variable itself is not declared but called in code, then it is not defined.
console.log(x); // undefined
var x = 25;
console.log(x); // 25
console.log(a); // Uncaught ReferenceError: a is not defined

//JS is a loosely typed / weakly typed language. 
//It doesn't attach variables to any datatype
//We can say var a = 5, and then change the value to boolean a = true or string a = 'hello' later on
// var a can hold any datatype

//*Never assign undefined to a variable manually. Let it happen on it's own accord.
