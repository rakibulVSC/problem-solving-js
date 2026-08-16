// let number=7;
// let sum=0;
// for(let i=1;i<=number;i++){
//     sum=sum+i;
    
// }
// console.log(sum)

//sum with function
const number=7;
function sumRange(number){
    let sum=0;
   for(let i=1;i<=number;i++){
    sum=sum+i;
    
}
return sum; 
}
const result=sumRange(number);
console.log(result)