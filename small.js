let arr=[500,120,20,5010,1220]
let small=arr[0];
for(let i=0;i<arr.length;i++){
    let smaller=arr[i];
    if(smaller<small){
        small=smaller;
    }
}
console.log(small);