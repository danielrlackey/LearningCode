




// let btn = document.querySelector("button");
// let isColored = false

// btn.addEventListener("click", function(){
//    if (!isColored){
//     document.body.style.background = "purple"
//    } else if(isColored) {
//     document.body.style.background = "white"
//    }
//     isColored = !isColored;
// })  


//Fizzz Buzz


// print numbers 1-100 and if a number is divisable by 3 print fizz
// if a number is divisable by 5 print buzz
// if a number is divisable by 3 and 5 print fizzbuzz

for(let i = 1; i < 100; i++ ){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuzz")
    }else if(i % 3 == 0){
        console.log("fizz")
    }else if (i % 5 == 0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}
