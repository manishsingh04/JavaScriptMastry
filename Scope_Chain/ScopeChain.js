var globalVar = "global";

function outerFunction() {
    var outerVar = "outer";

    function innerFunction() {
        var innerVar = "inner";
        console.log(innerVar);   // "inner"
        console.log(outerVar);   // "outer"
        console.log(globalVar);  // "global"
    }

    innerFunction();
    console.log(globalVar);      // "global"
    console.log(outerVar);       // "outer"
    // console.log(innerVar);    // Uncaught ReferenceError: innerVar is not defined
}

outerFunction();



/*
In this example:
innerFunction: can access innerVar, outerVar, and globalVar.
outerFunction :can access outerVar and globalVar but not innerVar.
The global scope can only access globalVar.
The Scope Chain in Action
When innerFunction is called, it first looks for innerVar within its own scope.
If innerVar is not found, it moves up to the outerFunction scope to look for outerVar.
If outerVar is not found there, it continues to the global scope to look for globalVar.
This chain ensures that variables are resolved correctly and that functions have access to the variables they need based on their scope.

*/

//Full article

//https://chatgpt.com/c/db299d84-e604-4ac6-a04c-1a497f8e5bea

