//  sort () - Elements of an arrey in ascending and descending ondragover

let num = [10, 1, 21, 2]
num.sort();
console.log(num);


// numeric sort ascending order
let numbers1 = [4,2,5,1,3];
numbers1.sort((a,b) => a-b);
console.log(numbers1);

// numeric sort descending order
let numbers2 = [4,2,5,1,3];
numbers2.sort((a,b) => b-a);
console.log(numbers2);

// default String sort (ascending)
let fruits = ['banana','apple','dates','cherry'];
fruits.sort();
console.log(fruits);

// dscending order for String
let fruits2 = ['banana','apple','dates','cherry'];
fruits2.sort((a,b) => b.localeCompare(a));
console.log(fruits2);