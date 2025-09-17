// 


const students = [
    { name: "shanif", age: 21, grade: "A" },
    { name: "avanthika", age: 22, grade: "c" },
    { name: "Hima", age: 23, grade: "b" }
]

// accessing data
console.log(students[0].name);
console.log(students[2].name);

// looping through object array

students.forEach(stdnt => {
    console.log(`${stdnt.name} is ${stdnt.age} grade ${stdnt.grade}`);
    
});
