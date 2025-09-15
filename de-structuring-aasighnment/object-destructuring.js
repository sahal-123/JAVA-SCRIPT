// 

const person = {name: "firnas", age : 17, country:"africa"}

// basic destructuring
const {name, age} = person;
console.log(name);
console.log(age);

// rename variables
const {country: nation} = person;
console.log("nation: ", nation);

// defult value
const {gender = 'male'} = person;
console.log("gender: ",gender);

console.log("person..", person);




