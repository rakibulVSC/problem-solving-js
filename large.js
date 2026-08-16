let arr=[500,120,20,5010,1220]
// let largers=arr[0];
// for(let i=0;i<arr.length;i++){
// let currentElement=arr[i];
// if(currentElement>largers){
//     largers=currentElement;
// }
// }
// // console.log(largers);

function largest(arr){
    let largers=arr[0];
    for(let i=0;i<arr.length;i++){
let currentElement=arr[i];
if(currentElement>largers){
    largers=currentElement;
}
}
return largers;
}
console.log(largest(arr))