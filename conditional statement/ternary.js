const prompt = require('prompt-sync')();
let age =prompt("enter ur age: ");
let result = (age >= 18) ? "adult" : "Minor";
console.log(result);