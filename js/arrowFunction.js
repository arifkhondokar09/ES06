/* function sum(num1,num2){
    return num1+num2;

}

const result= sum(4,3);
console.log(result); */




/* function sum2(num3,num4){
    return num3+num4;

}
console.log(sum2(10,3)) */

/* 

const sum2= (num3,num4) => num3 + num4;
console.log(sum2(10,4)) */

const sum3= (num3,num4)=> num3+num4;
console.log(sum3(110,18));



const total= (x,y)=> x+y;
console.log(total(10,11));



const result = (x,y,z)=>(x+y-z);

console.log(result(5,4,5));







let country = "bangladesh";

let ant= ` ${country}  is my country.
i love my country very  much`
console.log(ant);




const sum8 = (number1, number2)=> {
    res= number1+number2;
    return res;
}

console.log(sum8(10,18))





/* 
 document.getElementById("hello").addEventListener("click",()=>{



    

})  */




/* const square= x=> x*x;
console.log(square(3)) */





const square= (x)=> {
    return x*x
}
console.log(square(7))


/* document.getElementById("hello").addEventListener("click",()=>{



})
 */



/* document.getElementById("btn-login").addEventListener("click",()=>{

}) */

const  sum10= (x)=> {
    let result= 0;

    result= x*x+x/x;
    return result;

}


console.log(sum10(5))



const mobiles = {
    brand : "yahamaha",
    price: 25000,
    published: 2018,
}


        for(let mobile in mobiles){
            console.log(mobile , ":", mobiles[mobile])
        }


        let keys= Object.keys(mobiles);
        for( let key of keys){
            console.log(key, ":", mobiles[key])
        }

        let values= Object.values(mobiles)

        console.log(values)

        console.log(mobiles["price"])