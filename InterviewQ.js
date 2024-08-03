
// Usecases

const user = [
    {
        id: 1,
        name: 'Manish',
        isActive: true,
        age: 22
    },
    {
        id: 2,
        name: 'Rithvik',
        isActive: false,
        age: 20
    },
    {
        id: 3,
        name: 'Ved',
        isActive: true,
        age: 7
    },
    {
        id: 4,
        name: 'Avik',
        isActive: true,
        age: 8
    },
]


// Write a code to get array of names from given array of users
const names = user.map((users) => users.name)
console.log(names);



// In JavaScript, the map() method is used to create a new array by applying a function to each element of an existing array. It does not modify the original array but instead returns a new array with the transformed elements.

// Here is the syntax and a simple example of how map() works:

// Syntax
// javascript
// Copy code
// array.map(function(currentValue, index, array) {
//     // return element for newArray
// }, thisValue);
// currentValue (required): The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array map was called upon.
// thisValue (optional): Value to use as this when executing the callback.