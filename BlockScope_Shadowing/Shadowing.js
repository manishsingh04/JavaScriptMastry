
/*
In JavaScript, shadowing occurs when a variable declared within a certain scope (like a function or block) has the same name as a variable declared in an outer scope. When this happens, the inner variable "shadows" the outer variable, meaning that within the inner scope, only the inner variable is accessible, effectively hiding the outer variable.
*/



let x = 10; // outer variable

function example() {
    let x = 20; // inner variable shadows the outer variable
    console.log(x); // outputs 20
}

example();
console.log(x); // outputs 10





//Example 1: Function Scope


var a = 10; // Outer variable

function foo() {
    var a = 20; // Inner variable shadowing the outer variable
    console.log(a); // Outputs: 20
}

foo();
console.log(a); // Outputs: 10



//Example 2: Block Scope
//With ES6, let and const introduce block scope, which can also lead to shadowing.


let y = 10; // Outer variable

if (true) {
    let y = 20; // Inner variable shadowing the outer variable
    console.log(y); // Outputs: 20
}

console.log(y); // Outputs: 10


//Example 3: Function Parameters
//Function parameters can also shadow outer variables.



let z = 10; // Outer variable

function bar(z) { // Parameter shadowing the outer variable
    console.log(z); // Outputs the value passed to the function
}

bar(30); // Outputs: 30
console.log(z); // Outputs: 10

/*
Key Points:
=>Shadowing occurs when a variable declared in a local scope (inner scope) has the same name as a variable in an outer scope.
//IMMPPPP
=>The inner variable shadows the outer one, making the outer variable inaccessible within the inner scope.

=>Shadowing can occur with variables declared using var, let, const, and even with function parameters.
*/


//what is shadowing in js

//https://chatgpt.com/c/c5a9a5d2-3124-46a5-89d5-f32091cc1633

