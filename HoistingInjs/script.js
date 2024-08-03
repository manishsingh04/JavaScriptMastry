

//Hoisting with functions

//1st Normal function
//foo(); //op-> Hello
//console.log(foo); //op-> [Function: foo]

function foo() {
    console.log("Hello");

}
//foo() //op->Hello


//2nd -> arrow function

// getName() // ReferenceError: Cannot access 'getName' before initialization
// const getName = () => {
//     console.log("This is arrow function");

// }
// getName()



//3rd->

//getName1() // op->ReferenceError: Cannot access 'getName1' before initialization
const getName1 = function () {

    console.log("This is normal function stored in variable");

}

//getName1() //op->This is normal function stored in variable



//SUMMARY-> jab bhi function ko store karte hai toh, wo memory maine variable jaise treat hota hai , aur initiale value undefined set hoti hai...





//Hoisting with variables

//console.log(x); //op-> undefined
var x = 5;
//console.log(x);  //op-> 5


// with let and const

//console.log(a); //0p->ReferenceError: Cannot access 'a' before initialization
let a = 10;
//console.log(a); //op->10

//console.log(b); //0p->ReferenceError: Cannot access 'b' before initialization
const b = 20;
//console.log(b); //op ->20

/*
In this case, a and b is hoisted but not initialized, leading to a ReferenceError if you try to access it before the declaration.
*/


/*
SUMMARY

Differences Between var, let, and const
var: Declarations are hoisted to the top of their scope and initialized with undefined.
let and const: Declarations are hoisted to the top of their scope but are not initialized. They are in a "temporal dead zone" until the declaration is encountered in the code.
*/



/*
Summary
Hoisting: Moves declarations to the top of the scope.
Variables (var): Hoisted and initialized with undefined.
Variables (let and const): Hoisted but not initialized (temporal dead zone).
Functions: Entire function declarations are hoisted.*/