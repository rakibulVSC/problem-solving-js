// let monitor={
//     color:"Black",
//     brand:"samsung",
//     display:"144 HZ",
//     size:"21.5 inch"
// }

// for(let key in monitor){
//     console.log(key,":",monitor[key])
// }


let student={
    name:"Rakibul Hasan",
    age:24,
    university:"UIU",
    department:"CSE",
}
// for(key in student){
//     console.log(key)
// }

function objectOpretion(ob){
    for(key in student){
    console.log(key)
}
   for(key in student){
    console.log(ob[key])
}
for(key in student){
    console.log(key,":",ob[key])
}
let objectCount=Object.keys(ob).length;
console.log(objectCount)
}
objectOpretion(student)