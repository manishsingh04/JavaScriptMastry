
console.log(1);

setTimeout(function () {
    console.log(2);

}, 0);

Promise.resolve()
    .then(function () {
        console.log(3);

    })
    .catch(function () {
        console.log(4);

    })


setTimeout(function () {
    console.log("Asyn. code");

}, 4000);

function x(y) {
    console.log("x");

    //calling callback function
    y();


}

x(function y() {
    console.log("y");

});

//0p-> x, y,Asyn. code