//sum or average of array

// let array=[1,25,10];
// let sum=1;
// for(let i=0;i<array.length;i++){
//     sum+=array[i];

// }
// console.log(sum)
// let avg=sum/array.length;
// console.log(avg)


 let array=[1,25,10];
function getAverage(array){  
let sum=1;
for(let i=0;i<array.length;i++){
    sum+=array[i];

}
 let avg=sum/array.length;
return avg;
}
console.log(getAverage([1,25,10]))