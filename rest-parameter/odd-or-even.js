// 

function oddEven(...numbers) {
    return numbers.map(num => num % 2 === 0 ? 'even' : 'odd');
}
console.log(oddEven(10, 11, 14, 15, 18));
