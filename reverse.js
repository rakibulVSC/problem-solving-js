// let str="programming";

// let reverseWord="";
// for(let i=str.length-1; i>=0; i--){
//     let letter=str[i];
//     reverseWord=reverseWord+letter;
// }
// // console.log(reverseWord);


// let word="devoloper" ; //at first we take a variable;
// let rebersed="";  //third we take a empty container
// for(i=word.length-1;i>=0;i--){ //second we start for loop where i=varible.length-1;
// let lette=word[i];  // in a variable we took i value
// rebersed=rebersed+lette;
// }
// console.log(rebersed);


function rebersedWord(str){
    let reverseWord='';
    for(let i=str.length-1; i>=0; i--){
    let letter=str[i];
    reverseWord=reverseWord+letter;
}
return reverseWord;

}
console.log(rebersedWord("programming"))