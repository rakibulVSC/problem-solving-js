//fiter a value in a array

let arrays=[10,20,30,40,50,60,70,80,90,100];
let value=45;
let filterArray=[];


for(let i=0;i<arrays.length;i++){
    if(arrays[i]>value){
        filterArray.push(arrays[i])
    }
}
// console.log(filterArray)


function filterValur(arrays){
    let filterArray=[];

    for(let i=0;i<arrays.length;i++){
    if(arrays[i]>value){
        filterArray.push(arrays[i])
    }
}
return filterArray;
}
console.log(filterValur(arrays))