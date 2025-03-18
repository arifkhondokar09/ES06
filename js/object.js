const name={
    name: "walid",
    age:"3.5y",
    isTalk: true,
}
Object.seal(name)


name.dateOfBirth= 2021;
console.log(name)


Object.freeze(name)



console.log(Object.keys(name))
console.log(Object.values(name))
console.log(Object.entries(name))
