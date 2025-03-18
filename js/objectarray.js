const members= ["arif","sojib", "walid"];
console.log(...members)

const moreMembers= ["jony", "iqbal"];
console.log(...members,...moreMembers)

const more= [...members, ...moreMembers,"billal"];
console.log(more);



const [ami, vai, vatija]= members;
console.log(vatija);

//..................................................................

const  washingMachine= {
    company: "Lg",
   feature: "dual inverter",
    warrenty: "5 years"
}

const machine= {
weight: "50kg",

}

console.log({...washingMachine,...machine})




const {company,feature, warrenty}= washingMachine;
console.log(feature);







    