



function outerfunction() {

    let x = 10;

    return function innerfunction() {
        console.log(x);
    }

    // return innerfunction;

}

const closureFun = outerfunction();
closureFun();  //op ->10




//https://chatgpt.com/c/60b8394a-0416-49cf-a4cc-0a4ebc7595af