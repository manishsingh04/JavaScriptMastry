
//function statement, it is also known as function declaration

//1st
function a() {

    console.log("Funtion statement");

}
a(); //op->Funtion statement


//function expression

//2nd
var x = function () {
    console.log("Function expression");

}
x();


//3rd
//diff. btn function statement and function expression-> ans is hoisting
//we can host function statement , but can't function expression
//why?? since function expression is stored inside another variabel, threfore here function is treated as variable not function.

//a(); //op->Funtion statement
function a() {

    console.log("Funtion statement");

}

//x(); // TypeError
var x = function () {
    console.log("Function expression");

}




//4th: Anonymous Function ?-> a function without named is calleld Anonymous Function

//1st
// function() {

// }
//op-> RefEff-> since a function expect a name ... 

//2nd
/*
const c = function (para) {

    console.log(para);

}

console.log(c(function () {
    console.log("This is anonymous function");

}));


*/


//5th : Named function expression


var x = function abc() {
    console.log("Named function expression");

}
x(); //op->Named function expression
//abc(); //op->ReferenceError: abc is not defined, since whole function is stored inside the another function there it is treated as value and in memory execution contect it will not get a memory



//6th: Difference b/w Parameters and Arguments ?

/*
When we creating a function  & put some variabels in this ( ) that is our Parameters.
       For Ex - function ab( param1, param2 ){
                              console.log("
                      }
       & When we call this function & pass a variabel in this ( ) that is our Arguments
For Ex - ab( 4, 5 );

*/

//7th:




//first class function

/// function is passed as argument, which is also know as callback function
//But this is a example of first class fucntion
/*
function xyz() {

    return function innerF() {
        console.log("I am inner function");

    }
}

const inner = xyz();
console.log(inner());

*/











