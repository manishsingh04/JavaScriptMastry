//1st:

/*
function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i);

    }, 3000)
    console.log("Namasate Js, i will execute before the setTimeout"); // Js does not wait for setTimeout() funtion, it will excute line by line and after the timout of function, it will back to call stack and executed.

}
x();
*/


//2nd


/*
//Probealm-> print 1 after 1 sec, then print 2 after 2 sec and so on... till 5

function x() {

    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i); //op-> 6 => since function() will create a closure and it is refrencing the same i (not value of i,same ref mtlb same address), this loop is executed 5 time and it will create 5 copy and all 5 copy is pointing to the same i. and after loop completed i will be 6  , that's why we get 6 all 5 time.
            //one more reason is we are using var, and var is global scope variabel.

        }, i * 1000)
    }
}
x();
*/


//Solution of above prob.is -> use let which is block scope variabel, and closure will create 5 copy of i and all copy is pointing diff. referance of i.


/*
function x() {

    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);

        }, i * 1000)
    }
}
x();

*/



//One more solution -> we can deal this with var also
//solution -> video
//Hint -> create one more closure




function x() {


    for (var i = 1; i <= 5; i++) {

        function close(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000)
        }
        close(i)

    }
}
x();