// let str="Programming Hero";
// let count=0;
// let vowel="aeiou";
// for(i=0;i<str.length;i++){
//     let letter=str[i];
//     console.log(letter);
//    if(vowel.includes(letter)){
//     console.log("Vowel");
//     count ++;
//    }
// }
// console.log(count)

function countVowels(str){
    let vowel="aeiou";
    let count=0;
    for(i=0;i<str.length;i++){
    let letter=str[i];
    console.log(letter);
   if(vowel.includes(letter)){
    console.log("Vowel");
    count ++;
   }
}
return count;
}
console.log(countVowels("Programming Hero"))