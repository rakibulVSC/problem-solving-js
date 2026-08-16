// let number=15;
// for (let i=1;i<=number;i++){
//     console.log("i>",i)
//     if(i %3 ===0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     }
//     else if(i % 3 === 0){
//         console.log("Fizz")
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz")
//     }
   
//     else{
//         console.log("itSelf")
//     }
// }

function FizzBuzz(number){
    for (let i=1;i<=number;i++){
    console.log("i>",i)
    if(i %3 ===0 && i % 5 === 0){
        console.log("FizzBuzz")
    }
    else if(i % 3 === 0){
        console.log("Fizz")
    }
    else if(i % 5 === 0){
        console.log("Buzz")
    }
   
    else{
        console.log("itSelf")
    }
}

}
(FizzBuzz(15))