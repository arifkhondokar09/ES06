const friends= ["topu","rabbi","robiul"];

console.log(...friends);



 friends.push("ajmir");
console.log(friends);



const newArray= ["fahim",...friends,"rasel"];
console.log(...newArray);



const family= ["walid", "sojib","arif", "beauty"];


const kolija= ["sumaiya",...family];

console.log(kolija);


const wife=[..."sumaiya"]


console.log(wife);


const wifes= ["sumaiya"];
console.log(wifes[0].split(''))







const numbers= [33,58,46,8756,32,2443,324];
console.log(Math.max(...numbers));
console.log(Math.max(33,58,46,8756,32,2443,324))
console.log(Math.min(33,58,46,8756,32,2443,324));



const mobileBrand= ["nokia", "pixel","iphone", "samsung"];
console.log(...mobileBrand)
const newMobileBrand= ["oneplus",...mobileBrand];
console.log(newMobileBrand)