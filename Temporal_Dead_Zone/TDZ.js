
console.log(a); //undefined -> since let in never kept in TDZ
var a = 10;
console.log(a); // Output: 10



//NOTE: let and const -> kept in TDZ untill key are not initialized



console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
console.log(a); // Output: 10


console.log(a); // ReferenceError: Cannot access 'a' before initialization
const a = 10;
console.log(a); // Output: 10


//summary-> we can't access let and const untill they are not initialzed


















//https://chatgpt.com/c/0124b9e7-3099-4470-8e78-c181376b40c6