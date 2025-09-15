// 


const numers = [10,20,30,40];

// basic destructuring
const[a, b] = numers;
console.log(a);
console.log(b);

// skipping values
const[, , c] = numers;
console.log(c);

// using rest operators
const [x,...rest] = numers;
console.log("x is: ", x);
console.log(rest);




