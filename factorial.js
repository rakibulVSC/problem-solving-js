// //let go to factorial.
// let number=5;
// let result=1;
// for(let i=1; i<=5; i++){
//    result=result*i;
// }
// console.log(result)

/*
with function factorial 
*/

function factoriale(number){
    let result=1;
     for(let i=1; i<=5; i++){
      result=result*i;
    }
    return result;
}
console.log(factoriale(5))