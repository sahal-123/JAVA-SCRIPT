// to change nested arrey to Flaten (or  to an single level arrey)

const nested = [1, [2, [3]]];
const flat1 = nested.flat();
console.log(flat1); 

// level 1

const flat2 = nested.flat(2);
console.log(flat2);
 
// level 2