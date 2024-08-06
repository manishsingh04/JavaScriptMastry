//NOTE: let and const are block scope-> it means we can only access them within there block scope



{
    var a = 10;
    let b = 100;
    const c = 1000;

    console.log(a);
    console.log(b);
    console.log(c);

}

console.log(a);
// console.log(b);  //ReferenceError: b is not defined
// console.log(c);  //ReferenceError: c is not defined